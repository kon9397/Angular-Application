import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login/login.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    userName: string = '';
    constructor(private loginService: LoginService) { }

    ngOnInit(): void {
        this.userName = this.loginService.userEmail;
    }

}
