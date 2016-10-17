import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrumpQuoteComponent } from './trump/trump-quote.component';
import { TrumpService } from './trump/trump.service';

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
      // {
      //   path: '/'
      // }
    ])
  ],
  declarations: [
    AppComponent,
    TrumpQuoteComponent
  ],
  providers: [ TrumpService ],
  bootstrap: [ AppComponent]
})

export class AppModule {
}
