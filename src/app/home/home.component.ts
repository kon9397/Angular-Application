import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    userName: string = '';
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userName = this.userService.userEmail;
    }

}
