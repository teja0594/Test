import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
   flag=true
  change()
  {
    this.flag=false

  }
  change2()
  {
    this.flag=true

  }
}
