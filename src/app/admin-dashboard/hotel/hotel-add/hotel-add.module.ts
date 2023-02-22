import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelAddComponent} from "./hotel-add.component";
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [
    HotelAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HotelAddModule { }
