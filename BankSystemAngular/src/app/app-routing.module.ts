import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientDetailComponent } from './add-client-detail/add-client-detail.component';


const routes: Routes = [
  {path: 'add-client-detail', component: AddClientDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
