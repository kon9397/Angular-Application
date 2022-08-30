import { Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth/auth.guard";
import { LoginComponent } from "./login.component";

export const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
]