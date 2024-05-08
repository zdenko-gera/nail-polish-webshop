import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import { MatDivider, MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCard,
    MatDivider,
    MatDividerModule,
  ]
})
export class MainModule { }
