import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TrumpService {
  private quotesUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/";
  private headers = new Headers({'Content-Type': 'application/json'});
  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {}

  getRandomQuote(): Promise<string> {
    return this.http.get(this.quotesUrl + "random")
              .toPromise()
              .then(response => response.json().message as string)
              .catch(this.handleError);
  }
  getPersQuote(persName: string): Promise<string> {
    return this.http.get(this.quotesUrl + "personalized?q=" + persName)
              .toPromise()
              .then(response => {
                return response.json().message as string;
              })
              .catch(this.handleError);
  }
}
