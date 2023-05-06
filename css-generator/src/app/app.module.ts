import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { FormatingFormComponent } from './main/formating-form/formating-form.component';
import { CssContainerComponent } from './main/css-container/css-container.component';
import { ResultsContainerComponent } from './main/results-container/results-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FormatingFormComponent,
    CssContainerComponent,
    ResultsContainerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
