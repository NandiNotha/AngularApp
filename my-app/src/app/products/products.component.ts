import { Component } from '@angular/core';


export interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  cart: Product[] = [];

  addToCart() {
    // let product: Product = {
    //   name: "Product Name",
    //   price: 9.99,
    //   quantity: 1
    // };

    // this.cart.push(product);
    alert('Product added to the cart, view cart')
  }

}
