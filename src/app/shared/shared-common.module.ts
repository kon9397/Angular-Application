import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibsModule } from './shared-libs.module';



@NgModule({
  imports: [
    CommonModule,
    SharedLibsModule
  ],
  exports: [
    CommonModule,
    SharedLibsModule
  ]
})
export class SharedCommonModule { }
