import { NgModule } from '@angular/core';
import { SharedCommonModule } from './shared-common.module';



@NgModule({
  imports: [
    SharedCommonModule
  ],
  exports: [
    SharedCommonModule
  ],
})
export class SharedModule { }
