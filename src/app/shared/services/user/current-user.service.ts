import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { USERS } from "../../consts/users";
import { User } from "../../models/User";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService {
  private authState: Subject<User | null> = new Subject<User | null>();

  public authStateChange$ = this.authState.asObservable();

  constructor() {}

  get userEmail(): string {
    const userEmail = localStorage.getItem("userName");
    if (userEmail) {
      return userEmail;
    }

    return "";
  }

  get userRole(): string | null {
    return localStorage.getItem("role");
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
    this.authState.next(userData);
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

  setDataToLocalStorage(email: string, token: string, role: string) {
    localStorage.setItem("userName", email);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  }
}
