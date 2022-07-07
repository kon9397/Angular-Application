import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';
import { errorRoutes } from './error.route';



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ]
})
export class ErrorModule { }
