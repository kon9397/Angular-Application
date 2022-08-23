import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { footerRoutes } from "./layout/footer/footer.route";
import { navbarRoutes } from "./layout/navbar/navbar.route";
import { LoginGuard } from "./shared/guards/login/login.guard";

const layoutRoutes: Routes = [
    ...navbarRoutes,
    ...footerRoutes,
    {
        path: 'admin-dashboard',
        loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
        canActivate: [LoginGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(layoutRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
