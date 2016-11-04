import { Injectable } from '@angular/core';

@Injectable()

export class PageService {
  getPager(totalItems: number, currentPage: number = 1,
      pageSize: number = 10) {
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage: number, endPage: number;
    if (totalPages <=10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <=6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    var pages: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    }
  }
}
