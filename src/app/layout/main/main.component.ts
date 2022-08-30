import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/shared/services/user/current-user.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor(private currentUserService: CurrentUserService) { }

    ngOnInit(): void {
        this.currentUserService.authStateChange$.subscribe(state => {
            console.log(state);
        })
        this.currentUserService.checkSignedInAndUpdateAuthState();
    }

}
