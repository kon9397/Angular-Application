import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from '../../enums/Roles';
import { AuthService } from '../../services/auth/auth.service';
import { CurrentUserService } from '../../services/user/current-user.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private currentUserService: CurrentUserService,
        private router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isAuthenticated = this.currentUserService.checkSignedIn();

        if (!isAuthenticated) {
            this.router.navigate(['/login'])
        } 

        if(this.currentUserService.userRole === Roles.User && state.url === '/admin-dashboard') {
            this.router.navigate(['/error']);
        }

        return isAuthenticated;
    }

}
