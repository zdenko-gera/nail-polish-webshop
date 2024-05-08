import { Component, OnInit } from '@angular/core';
import { ItemInCart } from '../../shared/models/ItemInCart';
import { Product } from '../../shared/models/Product';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit { 
  ProductObject?: Array<Product>;
  AddToCartForm = new FormGroup({
    productID: new FormControl(''),
    quantity: new FormControl(''),
    userID: new FormControl(''),
  });

  constructor(private router: Router,private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Array<Product>) => {
      //console.log(data);
      this.ProductObject = data;
    })
  }

  onSubmit() {
    console.log(this.AddToCartForm.value);
    const productID = this.AddToCartForm.get('productID')?.value || '';
    const quantity = this.AddToCartForm.get('quantity')?.value || '1';
    const userID = this.AddToCartForm.get('userID')?.value || '';


      const itemInCart: ItemInCart = {
        //id: '1684445',
        productID: productID,
        quantity: quantity,
        userID: userID,
      }
        //INSERT megvalósítása
        this.cartService.addToCart(itemInCart).then(_ => {
          console.log('Termék hozzáadva az kosaradhoz.');
          this.router.navigateByUrl('/main');
          
        }).catch(error => {
          console.error(error);
        })
    }

}
