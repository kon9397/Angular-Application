import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from '../../enums/Roles';
import { LoginService } from '../../services/login/login.service';
import { UserService } from '../../services/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private userService: UserService,
        private router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isAuthenticated = this.loginService.checkSignedIn();

        if (!isAuthenticated) {
            this.router.navigate(['/login'])
        } 

        if(this.userService.userRole === Roles.User && state.url === '/admin-dashboard') {
            this.router.navigate(['/error']);
        }

        return isAuthenticated;
    }

}
