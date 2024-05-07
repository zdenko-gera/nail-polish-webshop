import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private location: Location) {

  }

  goBack() {
    this.location.back();
  }
}
