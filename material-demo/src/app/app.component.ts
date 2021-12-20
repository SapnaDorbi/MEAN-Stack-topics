import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;

  exclusive:boolean = true;

  onChange($event:any){
    console.log($event);
  }

  colors = [
    { id: 1, name: 'Green' },
    { id: 2, name: 'Red' },
    { id: 3, name: 'Yellow' }
  ]

  color = 2;
}
