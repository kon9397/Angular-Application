import { Injectable } from '@angular/core';
import { User } from "../../models/User";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';
import { Roles } from '../../enums/Roles';
import { adminRoutes } from 'src/app/admin-dashboard/admin-dashboard.route';
import { USERS } from '../../consts/users';
import { CurrentUserService } from '../user/current-user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router, private currentUserService: CurrentUserService) { }

    signIn(loginData: { email: string, password: string }): string | void {
        const currentUser = USERS.find(user => user.email === loginData.email && user.password === loginData.password);
        if (currentUser) {
            this.currentUserService.setTokenToLocalStorage(currentUser.token);
            this.currentUserService.updateAuthState(currentUser);
            if (currentUser.role === Roles.Admin) {
                this.router.navigate(['admin-dashboard']);
                return;
            } else {
                this.router.navigate(['/']);
                return;
            }
        }

        return 'Email or password is wrong'
    }

    signOut(): void {
        localStorage.clear();
        this.currentUserService.updateAuthState(null);
        this.router.navigate(['login']);
    }
}
