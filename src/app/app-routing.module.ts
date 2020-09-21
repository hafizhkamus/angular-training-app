import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProvinsiComponent } from './provinsi/provinsi.component';

const routes: Routes = [
  {
    path : '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path : "home",
    component: HomeComponent
  },
  {
    path: "about-us",
    component : AboutComponent
  },
  {
    path: "provinsi",
    component: ProvinsiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
