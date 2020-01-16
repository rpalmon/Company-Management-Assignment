import { Component, OnInit } from '@angular/core';
import { HQ } from './hq.model';
import { Company } from './co.model';
import { Employee } from './employee.model';


@Component({
  selector: 'app-headquarters-card',
  templateUrl: './headquarters-card.component.html',
  styleUrls: ['./headquarters-card.component.css']
})
export class HeadquartersCardComponent implements OnInit {

  constructor() { }

  name = '';
  company: any;

  public Hq: HQ = new HQ();

  ngOnInit() {
    this.Hq.name = 'HQ';
    this.Hq.companies = [];
    this.Hq = JSON.parse(localStorage.getItem('Hq'));
    console.dir(this.Hq);
  }

  addCompany() {
    var newCo = new Company();
    newCo.name = this.name;
    newCo.employees[0] = new Employee();

    this.Hq.companies.push(newCo);
    console.dir(this.Hq);
    localStorage.setItem('Hq', JSON.stringify(this.Hq));
    this.name = '';
  }

  deleteCompany(index) {
    console.log(this.Hq.companies[index]);
    this.Hq.companies.splice(index, 1);
    localStorage.setItem('Hq', JSON.stringify(this.Hq));
  }

  editCompany(index) {
    this.Hq.companies[index].name = prompt('Edit '+ this.Hq.companies[index].name);
    localStorage.setItem('Hq', JSON.stringify(this.Hq));
    this.company = this.Hq.companies[index];
    this.name = '';
  }

  thisHQ() {
    console.dir(this.Hq);
    return this.Hq;
  }

}
