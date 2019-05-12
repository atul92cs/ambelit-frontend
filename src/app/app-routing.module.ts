import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {PanelComponent} from './components/panel/panel.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MessagesComponent} from './components/messages/messages.component';
import {ComProfileComponent} from './components/com-profile/com-profile.component';
import {AdpostComponent} from './components/adpost/adpost.component';
import {LoginGuard} from './guards/login.guard';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'panel',component:PanelComponent,canActivate:[LoginGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[LoginGuard]},
  {path:'messages',component:MessagesComponent,canActivate:[LoginGuard]},
  {path:'completeprofile',component:ComProfileComponent,canActivate:[LoginGuard]},
  {path:'adpost',component:AdpostComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
