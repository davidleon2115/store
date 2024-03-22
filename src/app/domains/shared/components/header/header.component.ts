import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartComponent } from '../../../../icons/cart/cart.component';
import { RouterLink } from '@angular/router';
import { CartdownComponent } from './cartdown/cartdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,CartComponent,RouterLink,CartComponent,CartdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
