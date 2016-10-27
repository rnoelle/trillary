import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { TrumpQuoteComponent } from './trump/trump-quote.component';
import { HillaryEmailComponent } from './hillary/hillary-email.component';
import { TrumpService } from './trump/trump.service';
import { HillaryService } from './hillary/hillary.service';
import { PageService } from './page.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'trump-quotes',
        component: TrumpQuoteComponent
      },
      {
        path: 'hillary-emails',
        component: HillaryEmailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TrumpQuoteComponent,
    HillaryEmailComponent
  ],
  providers: [
    TrumpService,
    HillaryService,
    PageService
  ],
  bootstrap: [ AppComponent]
})

export class AppModule {
}
