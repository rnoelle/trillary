import { Component } from '@angular/core';

import { TrumpService } from './trump.service';

@Component({
  moduleId: module.id,
  selector: 'trump-quote',
  templateUrl: './trump-quote.component.html',
  providers: [ TrumpService ]
})

export class TrumpQuoteComponent {

}
