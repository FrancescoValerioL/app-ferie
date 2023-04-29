import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-cell',
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.scss']
})
export class DayCellComponent {
  @Input() day: string = ""
}
