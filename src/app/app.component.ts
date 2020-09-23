import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Checkpoint App';

  insert = [
    {
      link:'/provinsi',
      name:'Provinsi'
    },
    {
      link:'/save-kabupaten',
      name:'Kabupaten'
    },
    {
      link:'/save-kecamatan',
      name:'Kecamatan'
    }
  ]
}
