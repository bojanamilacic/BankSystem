import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientDetailComponent } from './add-client-detail/add-client-detail.component';
import { ViewClientDetailComponent } from './view-client-detail/view-client-detail.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: 'view-client-detail', component: ViewClientDetailComponent,canActivate:[AuthGuard]},
  {path: 'add', component: AddClientDetailComponent},
  {path: '', component: LoginComponent},
  {path: 'user-registration', component: UserRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
