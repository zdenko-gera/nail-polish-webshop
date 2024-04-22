import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }
}
