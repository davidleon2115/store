import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])

  constructor () {
    const initProducts : Product[] = [
      {
        id: Date.now(),
        title: 'Camiseta blanca',
        price: 150000,
        img: '/assets/vaca1.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca2.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca3.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca4.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca3.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca1.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca2.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca1.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca1.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca1.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca1.webp',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: '/assets/vaca1.webp',
        createdAt: new Date().toISOString()
      }
    ]

    this.products.set(initProducts);
  }

  fromChild(event : Event){
    console.log('Hola desde el padre');
    console.log(event);
  }
}
