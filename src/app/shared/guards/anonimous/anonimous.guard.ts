import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { CurrentUserService } from "../../services/user/current-user.service";

@Injectable({
  providedIn: "root",
})
export class AnonimousGuard implements CanActivate {
  constructor(
    private currentUserService: CurrentUserService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.currentUserService.checkSignedIn()) {
      this.router.navigate(["/"]);
      return this.currentUserService.checkSignedIn();
    }

    return !this.currentUserService.checkSignedIn();
  }
}
