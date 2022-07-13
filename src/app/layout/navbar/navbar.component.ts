import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
    public isMenuCollapsed = true;
    isLoggedIn: boolean = false;
    constructor(private loginService: LoginService) { }

    ngOnInit(): void {
        this.isLoggedIn = this.loginService.checkSignedIn();
    }

    ngOnChanges(): void {
    }

    onSignOut(): void {
        this.isMenuCollapsed = true;
        this.loginService.signOut();
        this.isLoggedIn = this.loginService.checkSignedIn();
    }

}
