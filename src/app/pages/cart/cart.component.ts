import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemInCart } from '../../shared/models/ItemInCart';
import { Product } from '../../shared/models/Product';
import { CartService } from '../../shared/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  itemsInCart?: Array<ItemInCart>;
  productsInCart?: Array<Product>;
  RemoveFromCartForm = new FormGroup({
    productID: new FormControl(''),
  });

  constructor(private location: Location, private cartService: CartService) {

  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.cartService.getAll().subscribe((data: Array<ItemInCart>) => {
      console.log(data);
      this.itemsInCart = data;
    })
  }

  onSubmit() {
    console.log(this.RemoveFromCartForm.value);
    const productID = this.RemoveFromCartForm.get('productID')?.value || '';

        //DELETE megvalósítása
        this.cartService.delete(productID).then(_ => {
          console.log('Termék eltávolítva a kosaradból.');          
        }).catch(error => {
          console.error(error);
        })
  }
}
