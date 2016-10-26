import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { HillaryService } from './hillary.service'

@Component({
  moduleId: module.id,
  selector: 'hillary-emails',
  templateUrl: './hillary-email.component.html'
})

export class HillaryEmailComponent {
  emails: any[];
  email: any;

  constructor(private hillaryService: HillaryService) {}

  search(type: string, term: string): void {
    this.email = undefined;
    if (type == "subject") {
      this.hillaryService.emailsBySubject(term)
          .then((emails: any[]) => {
            this.emails = emails;
          })
    } else if (type == "sender") {
      this.hillaryService.emailsBySender(term)
          .then((emails: any[]) => {
            this.emails = emails;
          })
    } else if (type == "recipient") {
      this.hillaryService.emailsByRecipient(term)
          .then((emails:any[]) => {
            this.emails = emails;
            console.log("First", emails[0])
          })
    }
  }

  getById(id: string): void {
    this.hillaryService.getById(id)
      .then((email: any) => {
        this.emails = [];
        this.email = email;
      })
  }
}
