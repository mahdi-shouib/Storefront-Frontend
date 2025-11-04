import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
	providedIn: 'root',
})
export class CartService {

	items: Product[] = [];

	getItems(): Product[] {
		return this.items;
	}

	addToCart(product: Product): void {
		this.items.unshift(product);
	}

	removeFromCart(product: Product): void {
		this.items.filter(p => p.id !== product.id);
	}

	clearCart(): Product[] {
		this.items = [];
		return this.items;
	}
}