import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { RouterModule } from "@angular/router";
import { adminRoutes } from "./admin-dashboard.route";

@NgModule({
    declarations: [AdminDashboardComponent],
    imports: [CommonModule, RouterModule.forChild(adminRoutes)],
})
export class AdminDashboardModule { }
