import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { RouterModule } from "@angular/router";
import { adminRoutes } from "./admin-dashboard.route";
import {HotelAddModule} from "./hotel/hotel-add/hotel-add.module";

@NgModule({
    declarations: [AdminDashboardComponent],
    imports: [CommonModule, RouterModule.forChild(adminRoutes), HotelAddModule],
})
export class AdminDashboardModule { }
