import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  AddProductForm = new FormGroup({
    title: new FormControl(''),
    details: new FormControl(''),
    price: new FormControl(''),
    imagePath: new FormControl(''),
  });

  constructor(private productService: ProductService) {
    
  }

  onSubmit() {
    console.log(this.AddProductForm.value);
    const titleValue = this.AddProductForm.get('title')?.value;
    const detailsValue = this.AddProductForm.get('details')?.value;
  
    if (titleValue && detailsValue) {
      const product: Product = {
        id: 'asdasdasdasd',
        title: titleValue,
        details: detailsValue,
        price: 2550,
        imagePath: 'null',
      }
        //INSERT megvalósítása
        this.productService.create(product).then(_ => {
          console.log('Termék hozzáadva az adatbázishoz.');
        }).catch(error => {
          console.error(error);
        })
      }
    }
  }
