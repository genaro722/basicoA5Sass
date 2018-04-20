import { NgModule } from '@angular/core';

import { Route } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UsuarioComponent} from './usuario/usuario.component';

export const RouterConfig: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }, //direccion desconocida
];