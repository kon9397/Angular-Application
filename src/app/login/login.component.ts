import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../shared/services/auth/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  });

  errorMessage: Observable<string> = new Observable<string>();
  noValidData: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.errorMessage = this.authService.signIn(
      this.loginForm.value as { email: string; password: string }
    );
    if (this.errorMessage) this.noValidData = true;
  }
}
