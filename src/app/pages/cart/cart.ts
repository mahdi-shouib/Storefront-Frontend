import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { CartService } from '../../services/cart-service';

@Component({
	selector: 'app-cart',
	standalone: false,
	templateUrl: './cart.html',
	styleUrl: './cart.css',
})
export class Cart implements OnInit {

	items: Item[] = [];

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.cartService.getItems().subscribe(res => {
			this.items = res;
		});
	}
}
