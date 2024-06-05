import { Component, EventEmitter } from "@angular/core";
import { Input } from '@angular/core';
import { Output } from "@angular/core";

@Component ({
	selector: 'btn-component',
	standalone: true,
	templateUrl: './btn.component.html'
})

export class ButtonComponent {
	@Input()
	public numValue : string = '';

	@Output()
	public onData = new EventEmitter<string>();

	sendValue() {
		this.onData.emit(this.numValue);
	}
}
