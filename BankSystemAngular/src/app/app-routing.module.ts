import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientDetailComponent } from './add-client-detail/add-client-detail.component';
import { ViewClientDetailComponent } from './view-client-detail/view-client-detail.component';


const routes: Routes = [
  {path: '', component: ViewClientDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
