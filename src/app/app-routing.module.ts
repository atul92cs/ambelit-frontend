import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {PanelComponent} from './components/panel/panel.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MessagesComponent} from './components/messages/messages.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'panel',component:PanelComponent},
  {path:'profile',component:ProfileComponent},
  {path:'messages',component:MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
