import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  ProductList?: Array<Product>;


  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Array<Product>) => {
      //console.log(data);
      this.ProductList = data;
    })
  }
}
