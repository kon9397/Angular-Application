import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../../services/user/current-user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private currentUserService: CurrentUserService,
        private router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isAuthenticated = this.currentUserService.checkSignedIn();
 
        if (isAuthenticated) {
            if (state.url.includes('login')) {
                this.router.navigate(['/']);
                return false;
            } else {
                return true;
            }
        } else {
            if (state.url.includes('login')) {
                return true;
            } else {
                this.router.navigate(['login']);
                return false;
            }
        } 
            
        
    }

}
