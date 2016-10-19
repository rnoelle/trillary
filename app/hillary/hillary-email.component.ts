import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { HillaryService } from './hillary.service'

@Component({
  moduleId: module.id,
  selector: 'hillary-emails',
  templateUrl: './hillary-email.component.html'
})

export class HillaryEmailComponent {
  subjects: any[];
  senders: any[];
  recipients: any[];
  email: any;

  constructor(private hillaryService: HillaryService) {}

  search(type: string, term: string): void {
    if (type == "subject") {
      this.hillaryService.emailsBySubject(term)
          .then((emails: any[]) => {
            this.subjects = emails;
          })
    }
  }
  getById(id: string): void {
    this.hillaryService.getById(id)
      .then((email: any) => {
        this.subjects = undefined;
        this.email = email;
        this.email.text = this.email.raw.parseHTML()
      })
  }
}
