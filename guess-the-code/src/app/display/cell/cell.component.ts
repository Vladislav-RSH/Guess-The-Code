import { Component, Input } from '@angular/core';

@Component({
  selector: 'cell-component',
  standalone: true,
  templateUrl: './cell.component.html'
})
export class CellComponent {
	@Input()
	public cellValue : string = '';
}
