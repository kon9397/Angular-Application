import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { UserService } from 'src/app/shared/services/user/user.service';

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
        private loginService: LoginService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.loginService.authState.subscribe(state => {
            this.isLoggedIn = state;
            this.role = this.userService.userRole;
        });
        this.loginService.authState.next(this.loginService.checkSignedIn());
    }

    onSignOut(): void {
        this.isMenuCollapsed = true;
        this.loginService.signOut();
    }

}
