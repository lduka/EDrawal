import { Component, OnInit } from '@angular/core';
import {EdrawalDataServiceService} from '../edrawal-data-service.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-transaction-componant',
  templateUrl: './transaction-componant.component.html',
  styleUrls: ['./transaction-componant.component.scss']
})
export class TransactionComponantComponent implements OnInit {
 // displayedColumns = ['item', 'cost'];
  transactions: Object[] = [];
  dataSource = new MatTableDataSource(this.transactions);
  displayedColumns: string[] = [
    'transDate',
    'transactionType',
    'status',
    'transactionSource', 'amount'
  ];

  constructor(private data: EdrawalDataServiceService) { }
  ngOnInit() {this.data.getTransactions().subscribe(
     // data => this.transactions = data;
    (list: Transactions[] ) => {
       this.transactions = list;
       this.dataSource.data = this.transactions;
    });
  }

}

export interface Transactions {
  transactionNo: number;
  userID: number;
  transactionType: string;
  status: string ;
  amount: number;
  transDate: Date;
  transactionSource: string;
}
