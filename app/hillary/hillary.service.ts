import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HillaryService {
  private emailUrl = 'https://www.leaksapi.com/clinton-emails/';
  private apiKey = '/ec50b8d4-fd0a-4584-98a6-6762c09a4fcc';
  private headers = new Headers({'Content-Type': 'application/json'});
  private handleError(error: any): Promise<any> {
    console.log("An error occured", error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {}

  emailsBySubject(subject: string): Promise<any> {
    return this.http.get(this.emailUrl + "subject" + this.apiKey + "/" + subject)
                .toPromise()
                .then(response => {
                  return response.json()
                })
                .catch(this.handleError);
  }

  emailsBySender(sender: string): Promise<any> {
    return this.http.get(this.emailUrl + "from" + this.apiKey + "/" + sender)
                .toPromise()
                .then(response => {
                  return response.json()
                })
                .catch(this.handleError);
  }

  emailsByRecipient(recipient: string): Promise<any> {
    return this.http.get(this.emailUrl + "to" + this.apiKey + "/" + recipient)
                .toPromise()
                .then(response => {
                  return response.json()
                })
                .catch(this.handleError);
  }

  getById(id: string): Promise<any> {
    return this.http.get(this.emailUrl + "id" + this.apiKey + "/" + id)
                .toPromise()
                .then(response => {
                  console.log(response.json());
                  return response.json()
                })
                .catch(this.handleError);
  }

}
