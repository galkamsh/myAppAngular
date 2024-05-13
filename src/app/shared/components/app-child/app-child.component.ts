import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [AppChildComponent],
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.css'
})
export class AppChildComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
