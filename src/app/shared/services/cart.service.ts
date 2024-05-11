import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ItemInCart } from '../models/ItemInCart';
import { Observable } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators'; // Importáljuk a switchMap operátort
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  loggedInUser?: firebase.default.User | null;
  collectionName= 'ItemsInCart';


  constructor(private afs: AngularFirestore, private authService: AuthService) {}
  
  addToCart(itemInCart: ItemInCart) {
    return this.afs.collection<ItemInCart>(this.collectionName).add(itemInCart);
  }

  getAll() {
    //return this.afs.collection<ItemInCart[]>(this.collectionName).valueChanges();
    this.loggedInUser = JSON.parse(localStorage.getItem('user') || '{}'); 

    return this.afs.collection<ItemInCart>(
      this.collectionName,
      ref => ref.where('userID', '==', this.loggedInUser?.uid)
    ).valueChanges();
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
