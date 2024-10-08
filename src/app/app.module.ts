import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { TabComponent } from './components/tab/tab.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { DroplistComponent } from './components/droplist/droplist.component';
import { RadioComponent } from './components/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TabComponent,
    CalculatorComponent,
    TextboxComponent,
    DroplistComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
