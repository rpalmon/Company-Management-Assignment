import { Component, OnInit } from '@angular/core';
import { HQ } from '../headquarters-card/hq.model';
import { Employee } from '../headquarters-card/employee.model';
import { Company } from '../headquarters-card/co.model';
import { fn } from '@angular/compiler/src/output/output_ast';


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
  NewEmployee: Employee;
  Index: number;

  ngOnInit() {
    this.Hq = JSON.parse(localStorage.getItem('Hq'));
    console.dir(this.Hq);

  }

  Update(company) {
    this.CompanyName = this.Hq.companies[company].name;
    this.SelectedCompany = JSON.parse(localStorage.getItem('Hq')).companies[company];
    console.dir(this.SelectedCompany);
    this.Index = company;

  }

  AddEmployee() {
    let fName = prompt('First Name: ');
    console.log(fName);
    let lName = prompt('Last Name: ');
    console.log(lName);
    let Money = prompt('Wage: ');
    console.log(Money)


    this.NewEmployee = {
      FirstName: fName,
      LastName: lName,
      Salary: parseFloat(Money)
    };

    console.dir(this.NewEmployee);
    this.SelectedCompany.employees.push(this.NewEmployee);
    console.dir(this.SelectedCompany.employees)
    console.dir(this.SelectedCompany);

    this.NewEmployee = new Employee();
    this.Hq.companies[this.Index].employees = this.SelectedCompany.employees;
    localStorage.setItem('Hq', JSON.stringify(this.Hq));
  }

  removeEmployee(index){
    this.SelectedCompany.employees.splice(index, 1);
    this.Hq.companies[this.Index].employees = this.SelectedCompany.employees;
    localStorage.setItem('Hq', JSON.stringify(this.Hq));
  }
}
