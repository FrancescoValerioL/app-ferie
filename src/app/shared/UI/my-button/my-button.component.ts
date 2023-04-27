import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent {
  @Input() value: string = ""
  @Input() variant: string = "light"
  @Input() outline: string = "outline"
  @Output() btnClick = new EventEmitter<any>()
  @Input() isDisabled: boolean = true;

  onClick(event: any) {
    this.btnClick.emit(event);
  }
}
