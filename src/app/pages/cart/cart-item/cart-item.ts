import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../models/item';

@Component({
	selector: 'app-cart-item',
	standalone: false,
	templateUrl: './cart-item.html',
	styleUrl: './cart-item.css',
})
export class CartItem {

	@Input() item: Item;
	@Output() removeItem: EventEmitter<Item> = new EventEmitter;

	constructor() {
		this.item = {
			product: {
				id: 0,
				name: '',
				price: 0,
				url: '',
				description: ''
			},
			quantity: 0
		}
	}

	clickRemove() {
		this.removeItem.emit(this.item);
	}
}
