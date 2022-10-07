import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Roles } from 'src/app/shared/enums/Roles';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth/auth.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isMenuCollapsed = true;
    Roles = Roles;
    @Input() currentUser: User | null = null;
    constructor(
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        console.log(this.currentUser);
    }

    onSignOut(): void {
        this.isMenuCollapsed = true;
        this.authService.signOut();
    }

}
