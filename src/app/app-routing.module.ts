import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'auth',pathMatch:'full'},
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m=> m.AuthModule)},
  {path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m=> m.DashboardModule)},
  {path:'**', redirectTo:'auth',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
