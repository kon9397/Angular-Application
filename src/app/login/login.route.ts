import { Routes } from "@angular/router";
import { AnonimousGuard } from "../shared/guards/anonimous/anonimous.guard";
import { LoginComponent } from "./login.component";

export const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AnonimousGuard] },
]