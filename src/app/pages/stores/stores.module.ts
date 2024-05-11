import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';


@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    MatDivider,
    MatDividerModule,
  ]
})
export class StoresModule { }
