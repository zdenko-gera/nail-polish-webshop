import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductRoutingModule } from './add-product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddProductComponent } from './add-product.component';


@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddProductModule { }
