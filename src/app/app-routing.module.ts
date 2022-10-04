import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { footerRoutes } from "./layout/footer/footer.route";
import { Roles } from "./shared/enums/Roles";
import { UserRoleAccessGuard } from "./shared/guards/user-role-access/user-role-access.guard";

const layoutRoutes: Routes = [
    ...footerRoutes,
    {
        path: 'admin-dashboard',
        loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
        canActivate: [UserRoleAccessGuard],
        data: {
            authorities: ['admin']
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(layoutRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
