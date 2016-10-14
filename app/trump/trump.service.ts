import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TrumpService {
  private quotesUrl = 'an url';
  private headers = new Headers({'Content-Type': 'application/json'});
  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {}

  getRandomQuote(): Promise<string> {
    return this.http.get(this.quotesUrl)
              .toPromise()
              .then(response => response.json().message as string)
              .catch(this.handleError);
  }
}
