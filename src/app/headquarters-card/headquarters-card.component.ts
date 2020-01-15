import { Component, OnInit } from '@angular/core';
import { HQ } from './hq.model';

@Component({
  selector: 'app-headquarters-card',
  templateUrl: './headquarters-card.component.html',
  styleUrls: ['./headquarters-card.component.css']
})
export class HeadquartersCardComponent implements OnInit {

  constructor() { }

  name: string = "";
  company: any;

  Hq: HQ = new HQ();

  ngOnInit() {
    this.Hq.name = "HQ";
    this.Hq.companies = [

    ]
  }

  addCompany(){
    this.Hq.companies.push(this.name);
    this.name = "";
    console.dir(this.Hq);
  }

  deleteCompany(index){
    console.log(this.Hq.companies[index]);
    this.Hq.companies.splice(index, 1);
  }

  editCompany(index){
    this.Hq.companies[index] = prompt('Edit '+ this.Hq.companies[index]);
  }

}
