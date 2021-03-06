import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {LoginService} from "../shared/services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })

    errorMessage: string = '';
    noValidData: boolean = false;


    constructor(
        private fb: FormBuilder,
        private loginService: LoginService
    ) { }

    ngOnInit(): void {
    }

    onSubmit() {
        this.errorMessage = this.loginService.signIn(this.loginForm.value as {email: string, password: string}) as string;
        if(this.errorMessage) this.noValidData = true;
    }

}
