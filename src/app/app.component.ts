import { Component, OnInit } from '@angular/core';
import { AccountServices } from './accounts.services';
//import { LoggingService } from './logging.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /* providers: [AccountServices] */
})
export class AppComponent implements OnInit {
  
  accounts:{name:string, status:string}[] = [];

  constructor(private accountsService: AccountServices) {

  }
  
    ngOnInit() {
      this.accounts = this.accountsService.accounts;
    }


 /*  onAccountAdded(newAccount: {name:string, status:string}){
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id:number, newStatus:string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  } */

  

}
