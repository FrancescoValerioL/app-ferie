import { NgModule } from "@angular/core";
import { MyButtonComponent } from './UI/my-button/my-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    MyButtonComponent
  ],
  imports: [BrowserModule, CommonModule],
  exports: [
    MyButtonComponent, CommonModule
  ]
})

export class SharedModule { }