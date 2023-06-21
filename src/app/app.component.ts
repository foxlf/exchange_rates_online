import { Component, OnInit } from '@angular/core';
import { RatesService } from './services/rates.service';
import { Currency, Quotes } from './models/currency_change';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'exchange_rates_online';
  date = new Date()
  isLoading = true
  isAllCurrencys = false
  rate: Currency
  arrQuotes:Array<any[]> = []
  arrDiffQuotes:Array<number> = []
  showAllCurrencys() {
    this.isAllCurrencys = !this.isAllCurrencys
    this.isAllCurrencys ? this.arrQuotes=Object.entries(this.rate.quotes) : this.arrQuotes=Object.entries(this.rate.quotes).splice(0,3)
  }

  constructor(private rateService: RatesService) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.rateService.getCurrency().subscribe(rate => {
        this.date = new Date()
        this.isLoading = false
        Object.keys(rate.quotes).forEach((key) => {
          this.arrDiffQuotes.push(rate.quotes[key as keyof Quotes] - (this.rate ? this.rate.quotes[key as keyof Quotes] : rate.quotes[key as keyof Quotes]))
        })
        this.isAllCurrencys ? this.arrQuotes=Object.entries(rate.quotes) : this.arrQuotes=Object.entries(rate.quotes).splice(0,3)
        this.rate = rate
      }, error => {
        this.date = new Date()
        throw error
      })
    }, 5000)
  }
  
}
