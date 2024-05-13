import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppChildComponent } from './shared/components/app-child/app-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AppChildComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'my-angular-project';
  isDisabled = true;
  items = ['tak1', 'task2', 'task3'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
