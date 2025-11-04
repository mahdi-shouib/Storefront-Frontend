import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';

@Component({
	selector: 'app-products-list',
	standalone: false,
	templateUrl: './products-list.html',
	styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {

	products: Product[] = [];

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.productService.getProducts().subscribe(res => {
			this.products = res;
		})
	}
}