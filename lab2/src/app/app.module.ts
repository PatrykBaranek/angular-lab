import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { RevenueComponent } from './revenue/revenue.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    RevenueComponent,
  ],
  imports: [BrowserModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
