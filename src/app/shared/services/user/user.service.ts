import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  get userEmail(): string {
    const userEmail = localStorage.getItem('userName');
    if (userEmail) {
        return userEmail;
    }

    return '';
  }

  get userRole(): string | null {
      return localStorage.getItem('role');
  }
}
