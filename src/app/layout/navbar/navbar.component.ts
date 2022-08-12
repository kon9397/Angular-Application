import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isMenuCollapsed = true;
    isLoggedIn: boolean = false;
    role: string | null = null;
    constructor(private loginService: LoginService) { }

    ngOnInit(): void {
        this.loginService.authState.subscribe(state => {
            this.isLoggedIn = state;
        });
        this.role = this.loginService.userRole;
        this.loginService.checkSignedIn();
    }

    onSignOut(): void {
        this.isMenuCollapsed = true;
        this.loginService.signOut();
    }

}
