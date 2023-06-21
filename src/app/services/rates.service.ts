import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Currency } from "../models/currency_change";
import { Observable } from "rxjs";

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
    apikey: "294Hp1JhzcrDsdwkm4SVPmnyaSNJHEJu"
  }
}

@Injectable({
  providedIn: 'root'
})

export class RatesService {

  constructor(private http: HttpClient) {
  }

  getCurrency(): Observable<Currency> {
    return this.http.get<Currency>("https://api.apilayer.com/currency_data/live?source=RUB&currencies=USD%2CEUR%2CGBP%2CCNY%2CJPY%2CTRY", requestOptions)
  }
}