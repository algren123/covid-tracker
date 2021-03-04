import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  summaryData: any;

  constructor(
    private dataService: DataService
  ) { }

  // Stores the API data in summaryData
  ngOnInit(): void {
    this.dataService.getSummaryData()
    .subscribe((data) => {
      this.summaryData = data;
    })
  }

}
