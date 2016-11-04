import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import * as _ from 'underscore';

import { HillaryService } from './hillary.service';
import { PageService } from '../page.service';

@Component({
  moduleId: module.id,
  selector: 'hillary-emails',
  templateUrl: './hillary-email.component.html'
})

export class HillaryEmailComponent {
  emails: any[];
  email: any;

  constructor(private hillaryService: HillaryService,
      private PageService: PageService) {}

  pager: any = {};
  pagedItems: any[];

  search(type: string, term: string): void {
    this.email = undefined;
    if (type == "subject") {
      this.hillaryService.emailsBySubject(term)
          .then((emails: any[]) => {
            console.log("If you love me")
            this.emails = emails;
            this.setPage(1);
          })
    } else if (type == "sender") {
      this.hillaryService.emailsBySender(term)
          .then((emails: any[]) => {
            console.log("please")
            this.emails = emails;
            this.setPage(1)
          })
    } else if (type == "recipient") {
      this.hillaryService.emailsByRecipient(term)
          .then((emails:any[]) => {
            console.log("work")
            this.emails = emails;
            this.setPage(1)
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

  setPage(page: number): void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.PageService.getPager(this.emails.length, page);
    this.pagedItems = this.emails.slice(this.pager.startIndex,
        this.pager.endIndex + 1);
  }
}
