import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  AddProductForm = new FormGroup({
    identificator: new FormControl(''),
    title: new FormControl(''),
    details: new FormControl(''),
    price: new FormControl(''),
    imagePath: new FormControl(''),
  });

  constructor(private router: Router, private productService: ProductService) {
    
  }

  onSubmit() {
    console.log(this.AddProductForm.value);
    const identificatorValue = this.AddProductForm.get('identificator')?.value || '';
    const titleValue = this.AddProductForm.get('title')?.value || '';
    const detailsValue = this.AddProductForm.get('details')?.value || '';
    const priceValue = this.AddProductForm.get('price')?.value || '';
    const imagePathValue = this.AddProductForm.get('imagePath')?.value || 'default_product.jpg';


      const product: Product = {
        id: identificatorValue,
        title: titleValue,
        details: detailsValue,
        price: priceValue,
        imagePath: imagePathValue,
      }
        //INSERT megvalósítása
        this.productService.create(product).then(_ => {
          console.log('Termék hozzáadva az adatbázishoz.');
          this.router.navigateByUrl('/main');
        }).catch(error => {
          console.error(error);
        })
    }
  }
