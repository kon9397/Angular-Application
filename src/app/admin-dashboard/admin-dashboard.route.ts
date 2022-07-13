import { Routes } from "@angular/router";
import { LoginGuard } from "../shared/guards/login/login.guard";
import { AdminDashboardComponent } from "./admin-dashboard.component";

export const adminRoutes: Routes = [
    { path: '', component: AdminDashboardComponent, canActivate: [LoginGuard] }
]