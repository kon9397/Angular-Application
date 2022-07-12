import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import {LoginGuard} from "../shared/guards/login.guard";

export const homeRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [LoginGuard]}
]