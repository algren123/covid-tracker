import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private summaryData = `https://api.covid19api.com/summary`

  constructor(
    private http: HttpClient,
  ) { }

  
  // API call
  getSummaryData() {
    return this.http.get(this.summaryData);
  }
}
