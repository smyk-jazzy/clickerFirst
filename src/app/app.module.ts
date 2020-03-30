import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    ClickCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
