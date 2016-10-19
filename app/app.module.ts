import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrumpQuoteComponent } from './trump/trump-quote.component';
import { HillaryEmailComponent } from './hillary/hillary-email.component';
import { TrumpService } from './trump/trump.service';
import { HillaryService } from './hillary/hillary.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
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
    TrumpQuoteComponent,
    HillaryEmailComponent
  ],
  providers: [
    TrumpService,
    HillaryService
  ],
  bootstrap: [ AppComponent]
})

export class AppModule {
}
