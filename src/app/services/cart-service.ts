import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
	providedIn: 'root',
})
export class CartService {

	items: Item[] = [];

	getItems(): Item[] {
		return this.items;
	}

	addToCart(item: Item): void {
		this.items.unshift(item);
	}

	removeFromCart(item: Item): void {
		this.items.filter(i => i.product.id !== item.product.id);
	}

	inCart(item: Item): boolean {
		return this.items.map(i => i.product.id).includes(item.product.id);
	}

	clearCart(): Item[] {
		this.items = [];
		return this.items;
	}
}