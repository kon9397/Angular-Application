import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { USERS } from "../../consts/users";
import { Roles } from "../../enums/Roles";
import { User } from "../../models/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap, of, catchError, shareReplay} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService {
  private apiUrl = 'http://localhost:3000';
  private authState: Subject<User | null> = new Subject<User | null>();
  private currentUser: User | null = {
    email: '',
    password: '',
    token: '',
    role: ''
  }

  public authStateChange$ = this.authState.asObservable();

  constructor(private http: HttpClient) {}

  get userEmail(): string {
    const userEmail = this.currentUser?.email;
    if (userEmail) {
      return userEmail;
    }

    return "";
  }

  get userRole(): string | null {
    const userRole = this.currentUser?.role;
    if(userRole) {
      return userRole;
    }

    return "";
  }

  checkSignedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  updateAuthState(userData: User | null): void {
    this.setCurrentUser(userData);
    this.authState.next(userData);
    console.log('update auth state')
  }

  private getAuthorizationHeader(): string {
    const authToken = localStorage.getItem('token');
    return `Bearer ${authToken}`;
  }

  private getHttpOptions(): { headers: HttpHeaders } {
    console.log(this.currentUser);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getAuthorizationHeader(),
        'Email': 'admin@example.com'
      })
    };
    return httpOptions;
  }

  checkSignedInAndUpdateAuthState(): void {
    const authToken = localStorage.getItem('token');
    console.log(authToken);
    if (authToken) {
      this.http.get<any>(`${this.apiUrl}/users/me`, this.getHttpOptions())
          .pipe(
              tap(response => {
                console.log(response)
                this.updateAuthState(response);
              }),
              catchError(error => {
                console.error(error);
                this.updateAuthState(null);
                return of(null);
              }),
              shareReplay()
          )
          .subscribe();
    } else {
      this.updateAuthState(null);
    }
  }

  hasAnyAuthorities(roles: Array<Roles>): boolean {
    const hasAuthority = !!(roles.find(role => role === this.currentUser?.role));
    return hasAuthority;
  }

  setCurrentUser(currentUser: User | null): void {
      this.currentUser = currentUser;
  }

  setTokenToLocalStorage(token: string) {
    localStorage.setItem("token", token);
  }
}
