import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-payment-form',
	standalone: false,
	templateUrl: './payment-form.html',
	styleUrl: './payment-form.css',
})
export class PaymentForm {

	@Input() total: number;
	payment = {
		name: '',
		cardNumber: '',
		expiry: '',
		cvv: '',
		address: ''
	};

	@Output() pay: EventEmitter<void> = new EventEmitter;

	constructor() {
		this.total = 0;
	}

	submitPaymentForm() {
		this.payment = {
			name: '',
			cardNumber: '',
			expiry: '',
			cvv: '',
			address: ''
		}
		this.pay.emit();
	}
}
