import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { AddcartIconComponent } from '../../../../icons/addcart-icon/addcart-icon.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,AddcartIconComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required : true}) product! : Product;
  @Output() addToCart = new EventEmitter()

  addToCartHandler() {
    console.log('Click from child');
    this.addToCart.emit('Hola este es un msg desde el '+this.product.title);
  }
}
