import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartComponent } from '../../../../../icons/cart/cart.component';
import { BagIconComponent } from '../../../../../icons/bag-icon/bag-icon.component';

@Component({
  selector: 'app-cartdown',
  standalone: true,
  imports: [CommonModule,CartComponent,BagIconComponent],
  templateUrl: './cartdown.component.html',
  styleUrl: './cartdown.component.css'
})
export class CartdownComponent {

}
