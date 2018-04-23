import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './shared/menu/menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NotificationComponent } from './shared/notification/notification.component';

import { RouterConfig } from './/app-routing.module';
import { RouterModule } from '@angular/router';

import { NotificationService } from './shared/notification/notification.service';
import { UsuarioService } from './usuario/usuario.service';
import { VariableService } from './shared/variable.service';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UsuarioComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    NotificationService, 
    UsuarioService, 
    VariableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
