import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Top10PlayersComponent } from './top10-players/top10-players.component';

@NgModule({
  declarations: [
    AppComponent,
    Top10PlayersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
