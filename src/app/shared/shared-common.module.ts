import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibsModule } from './shared-libs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HasAuthorityDirective } from './directives/has-authority.directive';



@NgModule({
  declarations: [HasAuthorityDirective],
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
    ReactiveFormsModule,
    HasAuthorityDirective
  ]
})
export class SharedCommonModule { }
