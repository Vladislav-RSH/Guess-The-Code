import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CellComponent } from './cell/cell.component';
import { ButtonComponent } from './button/btn.component';

@Component({
  selector: 'display-component',
  standalone: true,
  templateUrl: './display.component.html',
  imports: [CellComponent, ButtonComponent]
})

export class DisplayComponent implements AfterViewInit {
	ngAfterViewInit(): void {
		throw new Error('Method not implemented.');
	}

	public cellValue : string = '';
	private count : number = 0;
	private result : string = '';
	cellValues = ['', '', '', ''];
	public numValue : string = '';

	public onData(data:string) : string {
		while (this.count < 5) {
			this.cellValues[this.count] = (data);
			this.result += this.cellValues[this.count];
			this.count++;
			break;
		}
		return this.result;
	}
}