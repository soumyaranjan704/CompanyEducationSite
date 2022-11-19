import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebdevComponent } from './components/webdev/webdev.component';
import { BackendComponent } from './components/backend/backend.component';
import { FullstackComponent } from './components/fullstack/fullstack.component';
import { IotComponent } from './components/iot/iot.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { MissionComponent } from './components/abouts/mission/mission.component';
import { TeamComponent } from './components/abouts/team/team.component';
import { CareerComponent } from './components/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SignupComponent,
    WebdevComponent,
    BackendComponent,
    FullstackComponent,
    IotComponent,
    FoundationComponent,
    MissionComponent,
    TeamComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
