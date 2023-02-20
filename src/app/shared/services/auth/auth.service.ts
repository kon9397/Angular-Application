import { Injectable } from '@angular/core';
import { User } from "../../models/User";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';
import { Roles } from '../../enums/Roles';
import { adminRoutes } from 'src/app/admin-dashboard/admin-dashboard.route';
import { USERS } from '../../consts/users';
import { CurrentUserService } from '../user/current-user.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, mapTo, tap, of, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient, private router: Router, private currentUserService: CurrentUserService) { }

    getUsers() {

    }

    signIn(loginData: { email: string, password: string }): Observable<string> {
        // const currentUser = USERS.find(user => user.email === loginData.email && user.password === loginData.password);
        // if (currentUser) {
        //     this.currentUserService.setTokenToLocalStorage(currentUser.token);
        //     this.currentUserService.updateAuthState(currentUser);
        //     if (currentUser.role === Roles.Admin) {
        //         this.router.navigate(['admin-dashboard']);
        //         return;
        //     } else {
        //         this.router.navigate(['/']);
        //         return;
        //     }
        // }
        //
        // return 'Email or password is wrong'
        return this.http.post<any>(`${this.apiUrl}/login`, { email: loginData.email, password: loginData.password })
            .pipe(
                tap(response => {
                    this.currentUserService.setTokenToLocalStorage(response.token);
                    this.currentUserService.setEmailToLocalStorage(response.user.email);
                    this.currentUserService.updateAuthState(response.user);
                    if (response.user.role === 'admin') {
                        this.router.navigate(['admin-dashboard']);
                    } else {
                        this.router.navigate(['/']);
                    }
                }),
                catchError(error => {
                    console.error(error);
                    return of('Email or password is wrong');
                })
            );
    }

    signOut(): void {
        localStorage.clear();
        this.currentUserService.updateAuthState(null);
        this.router.navigate(['login']);
    }
}
