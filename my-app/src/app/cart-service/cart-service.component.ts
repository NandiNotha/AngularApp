// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductsComponent } from '../products/products.component';
// // import { Product } from './products';

// @Component({
//   selector: 'app-cart-service',
//   templateUrl: './cart-service.component.html',
//   styleUrls: ['./cart-service.component.scss']
// })
// export class CartServiceComponent {
//   items: ProductsComponent[] = [];
// /* . . . */

//   addToCart(product: ProductsComponent) {
//     this.items.push(product);
//   }

//   getItems() {
//     return this.items;
//   }

//   clearCart() {
//     this.items = [];
//     return this.items;
//   }
// }

// export class ProductsComponent implements OnInit {

//   constructor(
//     private route: ActivatedRoute,
//     private cartService: CartService
//   ) { }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
// }

// export class ProductsComponent implements OnInit {
//   addToCart(product: Product) {
//     this.cartService.addToCart(product);
//     window.alert('Your product has been added to the cart!');
//   }
// }

