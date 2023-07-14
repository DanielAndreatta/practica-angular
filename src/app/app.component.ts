
import { Component } from '@angular/core';

export interface Item {
  name: string;
  cost: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'material-app';

  items: Item[] = [
    { name: 'Printer', cost: '$500' },
    { name: 'Coffee Maker', cost: '$80' },
    { name: 'Smartphone', cost: '$800' },
    { name: 'Laptop', cost: '$1200' },
    { name: 'Blender', cost: '$50' },
    { name: 'Washing Machine', cost: '$700' },
    { name: 'Desktop PC', cost: '$1500' }
  ];

  showList = true;

  toggleList() {
    this.showList = !this.showList;
  }

  columns: string[] = [
    'name',
    'cost'
  ];
  columnLabels: { [key: string]: string } = {
    'name': 'NAME',
    'cost': 'COST'
  };
}
