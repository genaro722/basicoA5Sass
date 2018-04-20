import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterConfig } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { NotificationService } from './shared/notification/notification.service';


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
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
