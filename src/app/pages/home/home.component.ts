import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('months') monthsSelect!: ElementRef;
  selectedMonth: string = "Giugno"
  months = new Map<string, number>([
    ["Gennaio", 1],
    ["Febbraio", 2],
    ["Marzo", 3],
    ["Aprile", 4],
    ["Maggio", 5],
    ["Giugno", 6],
    ["Luglio", 7],
    ["Agosto", 8],
    ["Settembre", 9],
    ["Ottobre", 10],
    ["Novembre", 11],
    ["Dicembre", 12]
  ])
  monthsList: string[] = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre"
  ]

  days: string[] = []
  getDaysInAMonth = (year: number, month: number) => {

    let actualMonth = month - 1
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
    this.days = [...this.getDaysInAMonth(2023, Number(this.months.get(this.selectedMonth)))]
  }

  onSelected() {
    this.selectedMonth = this.monthsSelect.nativeElement.value
    this.days = [...this.getDaysInAMonth(2023, Number(this.months.get(this.selectedMonth)))]
  }



  clickHandler($event: any) {
    console.log($event.target.value)
  }
}
