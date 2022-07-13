import { Routes } from "@angular/router";
import { LoginGuard } from "../shared/guards/login/login.guard";
import { HomeComponent } from "./home.component";

export const homeRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [LoginGuard] }
]