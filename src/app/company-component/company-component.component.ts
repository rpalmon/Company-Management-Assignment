import { Component, OnInit } from '@angular/core';
import { HQ } from '../headquarters-card/hq.model';
import { Employee } from '../headquarters-card/employee.model';
import { Company } from '../headquarters-card/co.model';


@Component({
  selector: 'app-company-component',
  templateUrl: './company-component.component.html',
  styleUrls: ['./company-component.component.css']
})
export class CompanyComponentComponent implements OnInit {

  title = "Company Management";
  constructor() { }

  Hq: HQ;
  CompanyName = 'Choose Company';
  SelectedCompany: Company;

  ngOnInit() {
    this.Hq = JSON.parse(localStorage.getItem('Hq'));
    console.dir(this.Hq);
  }

  Update(company){
    this.CompanyName = this.Hq.companies[company].name;
    this.SelectedCompany = JSON.parse(localStorage.getItem('Hq')).companies[company];
    console.dir(this.SelectedCompany);

  }
}
