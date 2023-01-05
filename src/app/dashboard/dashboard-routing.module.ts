import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:'', component:CategoryComponent,
    children:[
      { path:'categories',component:CategoryComponent},
      { path: "**",redirectTo:"categories"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
