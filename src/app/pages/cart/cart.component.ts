import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemInCart } from '../../shared/models/ItemInCart';
import { CartService } from '../../shared/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  itemsInCart?: Array<ItemInCart> = [];
  //summedPrice: number = 0;
  //all?: Observable<{ items: ItemInCart[], products: Product[] }>;
  //productsInCart?: Array<Product>;
  RemoveFromCartForm = new FormGroup({
    productID: new FormControl(''),
  });

  constructor(private location: Location, private cartService: CartService, private afs: AngularFirestore) {
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.cartService.getAll().subscribe((data: Array<ItemInCart>) => {
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
}
