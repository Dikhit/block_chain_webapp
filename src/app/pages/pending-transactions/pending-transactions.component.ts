import { BlockchainService } from './../../service/blockchain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions = [];
  constructor(private blockchainService: BlockchainService){
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit() {
  }
  
  minePendingTransactions(){
    this.blockchainService.minePendingTransactions();
  }

}
