import { Injectable } from '@angular/core';
import { User } from "../../models/User";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';
import { Roles } from '../../enums/Roles';
import { adminRoutes } from 'src/app/admin-dashboard/admin-dashboard.route';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    users: User[] = [
        {
            email: 'admin@example.com',
            password: 'qwerty123',
            role: Roles.Admin,
            token: 'xcv346_dsf1cvj3bnff6FTH#2bcbsdsdf23'
        },
        {
            email: 'user@example.com',
            password: 'qwerty123',
            role: Roles.User,
            token: 'Jfg546!r60)2346FHw4457fdb341DDdfhbgh'
        }
    ]
    private authState: Subject<User> = new Subject<User>();

    public authStateChange$ = this.authState.asObservable();

    constructor(private router: Router) { }

    signIn(loginData: { email: string, password: string }): string | void {
        const currentUser = this.users.find(user => user.email === loginData.email && user.password === loginData.password);
        if (currentUser) {
            this.setDataToLocalStorage(currentUser.email, currentUser.token, currentUser.role);
            this.authState.next(currentUser);
            if (currentUser.role === Roles.Admin) {
                this.authState.next(currentUser);
                this.router.navigate(['admin-dashboard']);
                return;
            } else {
                this.authState.next(currentUser);
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
