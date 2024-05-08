import { Component, OnInit, Input } from '@angular/core';
import { ItemInCart } from '../../shared/models/ItemInCart';
import { Product } from '../../shared/models/Product';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { log } from 'console';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit { 
  @Input() loggedInUser?: firebase.default.User | null;
  ProductObject?: Array<Product>;
  AddToCartForm = new FormGroup({
    productID: new FormControl(''),
    quantity: new FormControl(''),
    userID: new FormControl(''),
  });

  constructor(private router: Router,private productService: ProductService, private cartService: CartService, private formBuilder: FormBuilder, private authService: AuthService) {}

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
    const userID = this.loggedInUser?.uid || '';


      const itemInCart: ItemInCart = {
        //id: '1684445',
        productID: productID,
        quantity: quantity,
        userID: userID,
      }

        if(this.loggedInUser !== null && this.loggedInUser !== undefined) {
        //INSERT megvalósítása
          this.cartService.addToCart(itemInCart).then(_ => {
            console.log('Termék hozzáadva az kosaradhoz.');
            this.router.navigateByUrl('/main');
            
          }).catch(error => {
            console.error(error);
          })
        } else {
          console.error('Jelentkezz be a funkcióhoz!')
          this.router.navigateByUrl('/login');
        }
    }

    getFormGroup(product: Product): FormGroup {
      return this.formBuilder.group({
        userID: 'jrKN3fTkl0T1odHu2A0EkFi3A0B2',
        productID: product.id,
        quantity: 1
      });
    }

}
