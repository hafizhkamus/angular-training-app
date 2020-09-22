import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProvinsiComponent } from './provinsi/provinsi.component';
import { ProvnisiListComponent } from './provnisi-list/provnisi-list.component';
import { KabupatenComponent } from './kabupaten/kabupaten.component';
import {KabupatenListComponent} from './kabupaten/kabupaten-list/kabupaten-list.component';
import { Kabupaten } from './kabupaten/service/kabupaten';

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
  },
  {
    path:'list-provinsi',
    component: ProvnisiListComponent
  },
  {
    path:'save-kabupaten',
    component: KabupatenComponent
  },
  {
    path: 'list-kabupaten',
    component: KabupatenListComponent 
  },
  {
    path: 'editprovinsi/:id',
    component: ProvinsiComponent,
    pathMatch: "full"
  },
  {
    path: 'editkabupaten/:id',
    component: KabupatenComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
