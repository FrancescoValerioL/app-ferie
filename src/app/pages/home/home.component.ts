import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  months = new Map<string, string>([
    ["1", "Gennaio"],
    ["2", "Febbraio"],
    ["3", "Marzo"],
    ["4", "Aprile"],
    ["5", "Maggio"],
    ["6", "Giogno"],
    ["7", "Luglio"],
    ["8", "Agosto"],
    ["9", "Settembre"],
    ["10", "Ottobre"],
    ["11", "Novembre"],
    ["12", "Dicembre"]
  ])

  days: string[] = []
  month: string = ""
  getDaysInAMonth = (year: number, month: number) => {

    let actualMonth = month - 1
    this.month = this.months.get(month.toLocaleString()) as string
    const dayNames = ["lun", "mar", "mer", "gio", "ven", "sab", "dom"]
    let date = new Date(year, actualMonth, 1);
    let days = [];
    while (date.getMonth() == actualMonth) {
      //console.log(dayNames[date.getDay() !== 0 ? date.getDay() - 1 : 6] + "-" + date.getDate())
      days.push(dayNames[date.getDay() !== 0 ? date.getDay() - 1 : 6] + "-" + date.getDate())
      date.setDate(date.getDate() + 1)
    }
    return days
  }

  ngOnInit(): void {
    this.days = [...this.getDaysInAMonth(2023, 6)]
    this.days.forEach(element => {
      console.log(element)
    });
  }




  clickHandler($event: any) {
    console.log($event.target.value)
  }
}
