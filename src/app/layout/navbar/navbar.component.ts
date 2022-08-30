import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CurrentUserService } from 'src/app/shared/services/user/current-user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isMenuCollapsed = true;
    isLoggedIn: boolean = false;
    role: string | null = null;
    constructor(
        private authService: AuthService,
        private currentUserService: CurrentUserService
    ) { }

    ngOnInit(): void {
    }

    onSignOut(): void {
        this.isMenuCollapsed = true;
        this.authService.signOut();
    }

}
