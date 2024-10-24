import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  favoriteMessage: string = '';

  save() {
    this.favoriteMessage = "You liked this!";
  }

  // Any other properties or methods you might need
}
