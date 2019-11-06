import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoArray: Array<string> = [];

  title = 'myApp';
  item: any;

  addToDo(item: string) {
    this.toDoArray.push(item);
    console.log(this.toDoArray);

  }
}
