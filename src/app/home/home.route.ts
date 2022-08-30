import { Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth/auth.guard";
import { HomeComponent } from "./home.component";

export const homeRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }
]