import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemInCart } from '../../shared/models/ItemInCart';
import { CartService } from '../../shared/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {
  itemsInCart?: Array<ItemInCart> = [];
  //summedPrice: number = 0;
  //all?: Observable<{ items: ItemInCart[], products: Product[] }>;
  //productsInCart?: Array<Product>;
  itemsInCartSub?: Subscription;
  RemoveFromCartForm = new FormGroup({
    productID: new FormControl(''),
  });

  constructor(private location: Location, private cartService: CartService, private afs: AngularFirestore) {
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.itemsInCartSub = this.cartService.getAll().subscribe((data: Array<ItemInCart>) => {
      console.log(data);
      this.itemsInCart = data;
      //console.log(this.itemsInCart.length);
    });
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

  ngOnDestroy(): void {
    if(this.itemsInCartSub) {
      this.itemsInCartSub.unsubscribe();
    }
  }
}
