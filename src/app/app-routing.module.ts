import { TrialnerrorComponent } from './trialnerror/trialnerror.component';
import { WalkInDetailComponent } from './walk-in-detail/walk-in-detail.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { RegisterComponent } from './register/register.component';
import { RoleComponent } from './event/role/role.component';
import { SuccessfulComponent } from './successful/successful.component';
import { EventComponent } from './event/event.component';
import { WalkInEventsComponent } from './walk-in-events/walk-in-events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"WalkIn", component: WalkInEventsComponent},
  {path:"",redirectTo:"/details", pathMatch: "full"},
 
  {path:"authentication", component: AuthenticationComponent},
  {path:"event", component: EventComponent},
  {path:"success", component: SuccessfulComponent},
  {path: "role", component: RoleComponent},
  {path: "register", component: RegisterComponent},
  {path: "details", component: WalkInDetailComponent},
  {path: "trial", component: TrialnerrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
