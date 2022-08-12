import { Injectable } from '@angular/core';
import { User } from "../../models/User";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    users: User[] = [
        {
            email: 'admin@example.com',
            password: 'qwerty123',
            role: 'admin',
            token: 'xcv346_dsf1cvj3bnff6FTH#2bcbsdsdf23'
        },
        {
            email: 'user@example.com',
            password: 'qwerty123',
            role: 'user',
            token: 'Jfg546!r60)2346FHw4457fdb341DDdfhbgh'
        }
    ]
    authState: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router) { }

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

    signIn(loginData: { email: string, password: string }): string | void {
        const currentUser = this.users.find(user => user.email === loginData.email && user.password === loginData.password);
        if (currentUser) {
            this.setDataToLocalStorage(currentUser.email, currentUser.token, currentUser.role);
            this.authState.next(true);
            if (currentUser.role === 'admin') {
                this.authState.next(true);
                this.router.navigate(['admin-dashboard']);
                return;
            } else {
                this.authState.next(true);
                this.router.navigate(['.']);
                return;
            }
        }

        return 'Email or password is wrong'
    }

    checkSignedIn(): boolean {
        const currentToken = localStorage.getItem('token');
        if (currentToken) {
            const state = this.users.find(user => user.token === currentToken) ? true : false;
            this.authState.next(state);
            return state;
        }
        return false;
    }

    signOut(): void {
        localStorage.clear();
        this.authState.next(false);
        this.router.navigate(['login']);
    }

    setDataToLocalStorage(email: string, token: string, role: string) {
        localStorage.setItem('userName', email);
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
    }
}
