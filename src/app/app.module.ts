import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { TabComponent } from './components/tab/tab.component';
import { ContentComponent } from './components/content/content.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { DroplistComponent } from './components/droplist/droplist.component';
import { RadioComponent } from './components/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TabComponent,
    ContentComponent,
    TextboxComponent,
    DroplistComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
