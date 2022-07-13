import { Injectable } from '@angular/core';
import { User } from "../../models/User";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    readonly admin: User = {
        email: 'admin@example.com',
        password: 'qwerty123',
        token: 'xcv346_dsf1cvj3bnff6FTH#2bcbsdsdf23'
    }

    readonly user: User = {
        email: 'user@example.com',
        password: 'qwerty123',
        token: 'Jfg546!r60)2346FHw4457fdb341DDdfhbgh'
    }

    constructor(private router: Router) { }

    get userEmail(): string {
        const userEmail = localStorage.getItem('userName');
        if (userEmail) {
            return userEmail;
        }

        return '';
    }

    signIn(loginData: { email: string, password: string }): string | void {
        if (loginData.email === this.admin.email) {
            if (loginData.password === this.admin.password) {
                this.setDataToLocalStorage(this.admin.email, this.admin.token);
                this.router.navigate(['.']);
            } else {
                return 'Password is wrong';
            }
        } else if (loginData.email === this.user.email) {
            if (loginData.password === this.user.password) {
                this.setDataToLocalStorage(this.user.email, this.user.token);
                this.router.navigate(['.']);
            } else {
                return 'Password is wrong';
            }
        } else {
            return 'User not found'
        }
    }

    checkSignedIn(): boolean {
        const currentToken = localStorage.getItem('token');

        if (currentToken) {
            if (currentToken === this.admin.token) {
                return true;
            } else {
                if (currentToken === this.user.token) {
                    return true
                } else {
                    localStorage.clear();
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    signOut(): void {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    setDataToLocalStorage(email: string, token: string) {
        localStorage.setItem('userName', email);
        localStorage.setItem('token', token);
    }
}
