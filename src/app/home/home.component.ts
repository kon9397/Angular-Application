import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../shared/services/user/current-user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    userName: string = '';
    constructor(private currentUserService: CurrentUserService) { }

    ngOnInit(): void {
        this.userName = this.currentUserService.userEmail;
    }

}
