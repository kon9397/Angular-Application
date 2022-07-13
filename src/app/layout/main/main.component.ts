import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }

}
