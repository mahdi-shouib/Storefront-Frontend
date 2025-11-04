import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
	selector: 'app-product-item',
	standalone: false,
	templateUrl: './product-item.html',
	styleUrl: './product-item.css',
})
export class ProductItem {
	@Input() product: Product;

	constructor() {
		this.product = {
			id: 0,
			name: '',
			price: 0,
			url: '',
			description: ''
		}
	}
}