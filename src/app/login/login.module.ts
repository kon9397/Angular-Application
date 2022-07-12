import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
import { loginRoutes } from "./login.route";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, RouterModule.forChild(loginRoutes), SharedModule],
})
export class LoginModule { }
