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
        img: 'https://desierto.co/wp-content/uploads/2022/09/Camiseta-Blanca-1.jpg',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camiseta Over Size',
        price: 170000,
        img: 'https://libur.com.co/cdn/shop/products/IMG_9896.jpg?v=1681164174',
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
