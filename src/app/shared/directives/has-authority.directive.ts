import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Roles } from '../enums/Roles';
import { CurrentUserService } from '../services/user/current-user.service';

@Directive({
  selector: '[hasAuthority]'
})
export class HasAuthorityDirective {
    @Input() set hasAuthority(authorities: Roles[]) {
        this.updateView(authorities);
        this.currentUserService.authStateChange$.subscribe(() => this.updateView(authorities));
    }

    constructor(
      private container: ViewContainerRef,
      private template: TemplateRef<any>,
      private currentUserService: CurrentUserService
    ) { }

    updateView(authorities: Roles[]) {
      const hasAnyAuthorities = this.currentUserService.hasAnyAuthorities(authorities);
      if(hasAnyAuthorities) {
        this.container.createEmbeddedView(this.template);
      } else {
          this.container.clear();
      }
    }
}
