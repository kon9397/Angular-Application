import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ErrorModule } from './layout/error/error.module';

import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule { }
