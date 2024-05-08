import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ItemInCart } from '../models/ItemInCart';
import { Observable } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators'; // Importáljuk a switchMap operátort

@Injectable({
  providedIn: 'root'
})
export class CartService {

  collectionName= 'ItemsInCart';


  constructor(private afs: AngularFirestore) {}
  
  addToCart(itemInCart: ItemInCart) {
    return this.afs.collection<ItemInCart>(this.collectionName).add(itemInCart);
  }

  getAll() {
    return this.afs.collection<ItemInCart>(this.collectionName).valueChanges();
  }

  /*getProductsInCart(): Observable<any[]> {
    return this.afs.collection(this.collectionName).valueChanges().pipe(
      switchMap(items => {
        const productIDs = items.map(item => item.productID);
        return this.afs.collection('Products', ref => ref.where('id', 'in', productIDs)).valueChanges();
      }),
      toArray() // Az Observable-t tömbbe alakítja
    );
  }*/

  delete(productID: string) {
    return this.afs.collection<ItemInCart>(this.collectionName).doc(productID).delete();
  }
}
