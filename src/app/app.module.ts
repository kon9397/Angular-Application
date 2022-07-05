import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';

import { HomeComponent } from './home/home.component';



@NgModule({
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
