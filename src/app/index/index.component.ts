import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeadquartersCardComponent } from '../headquarters-card/headquarters-card.component';
import { stringify } from 'querystring';
import { HQ } from '../headquarters-card/hq.model';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  hq: HQ;
  companies: string;


  ngOnInit() {
    this.hq = JSON.parse(localStorage.getItem('Hq'));
  }

  getCompany(i){
    return(this.hq.companies[i]);
  }

}
