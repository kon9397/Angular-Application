import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { CurrentUserService } from 'src/app/shared/services/user/current-user.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
    authStateSubscription: Subscription = new Subscription();
    currentUser: User | null = null
    constructor(private currentUserService: CurrentUserService) { }

    ngOnInit(): void {
        console.log('Main init')
        this.authStateSubscription = this.currentUserService.authStateChange$.subscribe(user => {
            this.currentUser = user;
        })
        this.currentUserService.checkSignedInAndUpdateAuthState();
    }

    ngOnDestroy():void {
        this.authStateSubscription.unsubscribe();
    }

    setNavbarConfig(e: NavbarComponent) {
        console.log('Navbar activated')
        console.log(e);
    }

}
