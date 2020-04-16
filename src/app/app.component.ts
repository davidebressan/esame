import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  item: string;

  list = [
    "carica su GitHub",
    "aiut",
    "ancora"
  ];

  onAdd() {
    console.log(this.item);
    this.list.push(this.item);
    this.item = "";
    console.log(this.item);
  }

  delete(i) {
    console.log(i);
    this.list.splice(i, 1);
  }
}
