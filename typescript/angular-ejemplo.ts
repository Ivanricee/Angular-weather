import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
	selector: 'angular-ejemplo',
	template: '<h1> {{saludo}} </h1>'
})
class HolaAngularComponent {
	saludo: String;
	constructor() {
		this.saludo = 'Hola angular 2';
	}
}

platformBrowserDynamic().bootstrapModule(HolaAngularComponent);//Componente es bootstrap﻿