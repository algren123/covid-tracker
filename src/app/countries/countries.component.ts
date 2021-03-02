import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  summaryData: any;

  countries: string[] = [];
  countryNewConfirmed: number[] = [];
  countryTotalConfirmed: number[] = [];
  countryNewDeaths: number[] = [];
  countryTotalDeaths: number[] = [];
  countryNewRecovered: number[] = [];
  countryTotalRecovered: number[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.getSummaryData()
    .subscribe((data) => {
      this.summaryData = data;
     for (let i=0; i<this.summaryData.Countries.length; i++) {
       this.countries.push(this.summaryData.Countries[i].Country);
       this.countryNewConfirmed.push(this.summaryData.Countries[i].NewConfirmed);
       this.countryTotalConfirmed.push(this.summaryData.Countries[i].TotalConfirmed);
       this.countryNewDeaths.push(this.summaryData.Countries[i].NewDeaths);
       this.countryTotalDeaths.push(this.summaryData.Countries[i].TotalDeaths);
       this.countryNewRecovered.push(this.summaryData.Countries[i].NewRecovered);
       this.countryTotalRecovered.push(this.summaryData.Countries[i].TotalRecovered);
     }
      
    })
  }

}
