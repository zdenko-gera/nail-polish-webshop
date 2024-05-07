import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  collectionName= 'Products';

  constructor(private afs: AngularFirestore) { }

  //CRUD műveletek

  create(product: Product) {
    return this.afs.collection<Product>(this.collectionName).doc(product.id).set(product);
  }

  getAll() {
    return this.afs.collection<Product>(this.collectionName).valueChanges();

  }

  update() {

  }

  delete() {

  }
}
