import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { WalkInEventsComponent } from './walk-in-events/walk-in-events.component';
import { AuthenticationComponent } from './authentication/authentication.component';
// import { EventComponent } from './event/event.component';
// import { PreRequisiteComponent } from './event/pre-requisite/pre-requisite.component';

import { SuccessfulComponent } from './successful/successful.component';
// import { RoleComponent } from './event/role/role.component';
import { RegisterComponent } from './register/register.component';
import { WalkInDetailComponent } from './walk-in-detail/walk-in-detail.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
// import { TrialnerrorComponent } from './trialnerror/trialnerror.component';

import { DataService } from './data.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    //EventComponent,
    //PreRequisiteComponent,
    SuccessfulComponent,
    //RoleComponent,
    RegisterComponent,
    WalkInDetailComponent,
    DropdownComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
