import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { HeadquartersCardComponent } from './headquarters-card/headquarters-card.component';
import { IndexComponent } from './index/index.component';
import { CompanyComponentComponent } from './company-component/company-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTestingComponent } from './material-testing/material-testing.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Material
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeadquartersCardComponent,
    IndexComponent,
    CompanyComponentComponent,
    MaterialTestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    FormsModule,
    CommonModule,
    NgbModule

  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
