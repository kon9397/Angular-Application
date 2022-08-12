import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { footerRoutes } from "./layout/footer/footer.route";
import { navbarRoutes } from "./layout/navbar/navbar.route";
import { LoginGuard } from "./shared/guards/login/login.guard";
import { AdminGuard } from "./shared/guards/role/admin.guard";

const layoutRoutes: Routes = [
    ...navbarRoutes,
    ...footerRoutes,
    {
        path: 'admin-dashboard',
        loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
        canActivate: [LoginGuard, AdminGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(layoutRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
