import { Component } from '@angular/core';
import { Item } from '../shared/item';
import { Loan } from '../shared/loan';
import { LoanService } from '../shared/loan.service';

@Component({
  selector: 'app-manage',
  templateUrl: 'manage.page.html',
  styleUrls: ['manage.page.scss']
})
export class ManagePage {
  loans: Loan[];
  items: Item[];

  constructor(private loanService: LoanService) {
    this.loanService.getPend()
      .subscribe(data => {
        this.loans = data
        this.items = data.items
      })

  }

  approve(id: string) {
    this.loanService.approve(id)
  }

  reject(id: string) {
    this.loanService.reject(id)
  }

}
