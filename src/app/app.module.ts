import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { PanelComponent } from './components/panel/panel.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessagingService} from './services/messaging.service';
import { ComProfileComponent } from './components/com-profile/com-profile.component';
import {MatInputModule,MatStepperModule,MatButtonModule,MatDialogModule} from '@angular/material';
import { ProfileModalComponent } from './components/profile-modal/profile-modal.component';
import { SkillModalComponent } from './components/skill-modal/skill-modal.component';
import { AddskillModalComponent } from './components/addskill-modal/addskill-modal.component';
import { AdpostComponent } from './components/adpost/adpost.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PanelComponent,
    SearchComponent,
    ProfileComponent,
    MessagesComponent,
    ComProfileComponent,
    ProfileModalComponent,
    SkillModalComponent,
    AddskillModalComponent,
    AdpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent],
  entryComponents:[ProfileModalComponent,SkillModalComponent,AddskillModalComponent]
})
export class AppModule { }
