import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { DataService } from '../data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  summaryData: any;
  searchText: string;

  // Empty object that will contain all the countries data
  countries: any = {
    country: [

    ]
  }

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.getSummaryData()
    .subscribe((data) => {
      this.summaryData = data;

      // For loop that will go through each country and create an object with all the requested data for each one of them
      for (let i=0; i<this.summaryData.Countries.length; i++) {

        // Empty Template
        var list = {
          name: '',
          NewConfirmed: 0,
          TotalConfirmed: 0,
          NewDeaths: 0,
          TotalDeaths: 0,
          NewRecovered: 0,
          TotalRecovered: 0,
        }

        // Populate the list with the data from the API call
        list.name = this.summaryData.Countries[i].Country;
        list.NewConfirmed = this.summaryData.Countries[i].NewConfirmed;
        list.TotalConfirmed = this.summaryData.Countries[i].TotalConfirmed;
        list.NewDeaths = this.summaryData.Countries[i].NewDeaths;
        list.TotalDeaths = this.summaryData.Countries[i].TotalDeaths;
        list.NewRecovered = this.summaryData.Countries[i].NewRecovered;
        list.TotalRecovered = this.summaryData.Countries[i].TotalRecovered;

        // Adding each country's info to the parent object
        this.countries.country.push(list);
        

      }
      console.log(this.countries);
      
      })


      
    

  }


}
