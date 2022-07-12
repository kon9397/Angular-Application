import { Routes } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import {LoginGuard} from "../shared/guards/login.guard";

export const adminRoutes: Routes = [
    { path: '', component: AdminDashboardComponent, canActivate: [LoginGuard] }
]