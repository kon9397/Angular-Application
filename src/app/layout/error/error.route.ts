import { Routes } from "@angular/router";
import { ErrorComponent } from "./error.component";

export const errorRoutes: Routes = [
    { path: 'access-denied', component: ErrorComponent },
    { path: '**', component: ErrorComponent }
]