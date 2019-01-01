import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountServices } from '../accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{name:string, status:string}>();

  constructor(private loggingServices: LoggingService, private accountsService: AccountServices) {

  }

  onCreateAccount(accountName: string, accountStatus:string) {
    /* this.accountAdded.emit({
      name:accountName,
      status:accountStatus
    }); */
    /* console.log('A server status changed, new status:' + accountStatus); */
    this.loggingServices.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
  }


  ngOnInit() {
  }

}
