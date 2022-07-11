import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibsModule } from './shared-libs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    SharedLibsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    SharedLibsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedCommonModule { }
