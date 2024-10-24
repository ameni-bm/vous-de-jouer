import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TousdetailsComponent } from './tousdetails/tousdetails.component';

const routes: Routes = [
  { path: '', component: MainComponent }, // Home route
  { path: 'tousdetails', component: TousdetailsComponent } // Tous Details route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
