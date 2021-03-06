import { Component, OnInit } from '@angular/core';
import { MdcFabModule, MdcMenuModule } from '@angular-mdc/web';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	clicked: boolean = false;
	page_title: string = `Home`;

	people: object[] = [
		{ name: 'Jeff Lowy', age: 35 },
		{ name: 'Vanessa Quintero', age: 34 },
		{ name: 'Nick Lowy', age: 34 }
	];

	test = (): void => {
		this.clicked = true;
		setTimeout(() => {
			this.clicked = false;
		}, 1000);
		console.log(`Clicked is ${this.clicked}`);
	};
	constructor() {}

	ngOnInit() {}
}
