import { Routes } from '@angular/router';
import { MainComponent } from './components/home/main/main.component';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo, } from '@angular/fire/auth-guard'
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/home/services/services.component';
import { InformationComponent } from './components/home/information/information.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { RelatedworksComponent } from './components/home/relatedworks/relatedworks.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main'},
    { path: 'main', component: MainComponent},
    { path: 'servicios', component: ServicesComponent},
    { path: 'trabajos', component: RelatedworksComponent},
    { path: 'nosotros', component: InformationComponent},
    { path: 'contactos', component: ContactComponent},


    // { path: 'main', component: MainComponent,
    //     ...canActivate(()=> redirectUnauthorizedTo(['/main']))
    // },
    // {path: 'register', component: RegisterComponent, ...canActivate(()=>redirectLoggedInTo(['/main']))},
    // {path: 'login', component: LoginComponent, ...canActivate(()=>redirectLoggedInTo(['/main']))},
    // {path: 'nutrition', component: NutritionComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
    // {path: 'calendar', component: CalendarComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},

];
