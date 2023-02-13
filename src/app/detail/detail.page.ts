import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../shared/item';
import { Loan } from '../shared/loan';
import { LoanService } from '../shared/loan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  loans: Loan;
  loanId: string;
  status: string;
  duedate: Date;
  items: Item[];

  constructor(private loanService: LoanService, private route: ActivatedRoute) {
    this.loanId = this.route.snapshot.params.id;
    this.loanService.getLoanById(this.loanId)
    .then(data =>
      {
       this.loans = data
       this.status = data.status
       this.duedate = data.duedate
       this.items = data.items
      })
   }

    delete(id: string) {
      this.loanService.delete(id)
    }
}
