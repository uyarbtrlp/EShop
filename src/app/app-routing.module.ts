import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      }
    ]
  },
  {
    path:'',
    component:AuthComponent,
    children:[
      {
        path:'',
        redirectTo:'/auth',
        pathMatch:'full'
      },
      {
        path:'auth',
        loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
  { path: "**",redirectTo:"/dashboard"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
