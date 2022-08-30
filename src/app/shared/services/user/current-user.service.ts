import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { USERS } from "../../consts/users";
import { Roles } from "../../enums/Roles";
import { User } from "../../models/User";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService {
  private authState: Subject<User | null> = new Subject<User | null>();
  private currentUser: User | null = {
    email: '',
    password: '',
    token: '',
    role: ''
  }

  public authStateChange$ = this.authState.asObservable();

  constructor() {}

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
    const currentToken = localStorage.getItem("token");
    if (currentToken) {
      const state = USERS.find((user) => user.token === currentToken)
        ? true
        : false;
      return state;
    }
    return false;
  }

  updateAuthState(userData: User | null): void {
    this.setCurrentUser(userData);
    this.authState.next(userData);
    console.log('update auth state')
  }

  checkSignedInAndUpdateAuthState(): void {
    const currentToken = localStorage.getItem("token");
    const currentUser = USERS.find(
      (user) => user.token === currentToken
    ) as User;

    if (currentUser) {
      this.updateAuthState(currentUser);
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
