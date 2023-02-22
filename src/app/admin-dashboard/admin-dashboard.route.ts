import { Routes } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import {UserRoleAccessGuard} from "../shared/guards/user-role-access/user-role-access.guard";
import {HotelAddComponent} from "./hotel/hotel-add/hotel-add.component";

export const adminRoutes: Routes = [
    { path: '', component: AdminDashboardComponent },
    {
        path: 'hotels/add',
        component: HotelAddComponent,
        canActivate: [UserRoleAccessGuard],
        data: {
            authorities: ['admin']
        }
    }
]
