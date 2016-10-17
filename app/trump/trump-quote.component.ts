import { Component, Input } from '@angular/core';

import { TrumpService } from './trump.service';

@Component({
  moduleId: module.id,
  selector: 'trump-quote',
  templateUrl: './trump-quote.component.html',
  providers: [ TrumpService ]
})

export class TrumpQuoteComponent {
  quote: string
  quoteName: string
  constructor(
    private trumpService: TrumpService
  ) {}

  randomQuote(): void {
    this.quoteName = undefined;
    this.trumpService.getRandomQuote().then(
      quote => this.quote = quote);
  }
  persQuote(persName: string): void {
    this.trumpService.getPersQuote(persName).then(
      quote => {
        this.quote = quote + ".";
      }
    );
  }

  @Input()
    persName: string;
}
