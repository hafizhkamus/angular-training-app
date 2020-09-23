import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FriendsComponent } from './friends/friends.component';
import { ProvinsiComponent } from './provinsi/provinsi.component';
import { ProvnisiListComponent } from './provnisi-list/provnisi-list.component';
import { KabupatenComponent } from './kabupaten/kabupaten.component';
import { KabupatenListComponent } from './kabupaten/kabupaten-list/kabupaten-list.component';
import { KecamatanComponent } from './kecamatan/kecamatan.component';
import { KecamatanListComponent } from './kecamatan/kecamatan-list/kecamatan-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FriendsComponent,
    ProvinsiComponent,
    ProvnisiListComponent,
    KabupatenComponent,
    KabupatenListComponent,
    KecamatanComponent,
    KecamatanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
