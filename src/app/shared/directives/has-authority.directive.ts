import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Roles } from '../enums/Roles';
import { CurrentUserService } from '../services/user/current-user.service';

@Directive({
  selector: '[hasAuthority]'
})
export class HasAuthorityDirective {
    @Input() set hasAuthority(authorities: any) {
        const hasAnyAuthorities = this.currentUserService.hasAnyAuthorities(authorities);
        
        if(hasAnyAuthorities) {
            this.container.createEmbeddedView(this.template);
        } else {
            this.container.clear();
        }
    }

    constructor(
      private container: ViewContainerRef,
      private template: TemplateRef<any>,
      private currentUserService: CurrentUserService
    ) { }


}
