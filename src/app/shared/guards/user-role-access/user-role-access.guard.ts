import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../../services/user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleAccessGuard implements CanActivate {
  constructor(private router: Router, private currentUserService: CurrentUserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(this.currentUserService.checkSignedIn()) {
        const role = this.currentUserService.userRole;
        if (role === 'admin') {
            return true;
        } else {
            this.router.navigate(['access-denied'])
            return false;
        }
      } else {
        this.router.navigate(['login'])
        return false;
      }
      
  }


  
}
