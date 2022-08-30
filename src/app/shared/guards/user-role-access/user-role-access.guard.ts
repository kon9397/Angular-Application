import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from '../../enums/Roles';
import { CurrentUserService } from '../../services/user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleAccessGuard implements CanActivate {
  constructor(private router: Router, private currentUserService: CurrentUserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(route.data['authorities'] && route.data['authorities'].length > 0) {
        if(this.currentUserService.checkSignedIn()) {
          if (this.currentUserService.hasAnyAuthorities(route.data['authorities'])) {
              return true;
          } else {
              this.router.navigate(['access-denied'])
              return false;
          }
        } else {
          this.router.navigate(['login'])
          return false;
        }
      } else {
          throw 'Authorities are missing. Please, add roles in route data!'
      }


      
      
  }


  
}
