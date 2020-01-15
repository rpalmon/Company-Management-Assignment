import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadquartersCardComponent } from './headquarters-card/headquarters-card.component';
import { CompanyComponentComponent } from './company-component/company-component.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path: 'hq',
    component: HeadquartersCardComponent
  },
  {
    path: '',
    component:  IndexComponent
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
