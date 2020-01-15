import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadquartersCardComponent } from './headquarters-card/headquarters-card.component';
import { CompanyComponentComponent } from './company-component/company-component.component';
import { IndexComponent } from './index/index.component';


const routes: Routes[] = [
  {
    path: 'hq',
    component: HeadquartersCardComponent,
    data: {title: 'HQ Management'}
  },
  {
    path: '',
    component:  IndexComponent,
    data: {title: 'Index'}
  },
  {
    path: 'company',
    component: CompanyComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
