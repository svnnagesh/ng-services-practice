import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountServices } from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name:string, status:string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id:number, newStatus:string}>();

  onSetTo(status:string) {
    //this.statusChanged.emit({id:this.id, newStatus:status});
    this.accountsService.updateStatus(this.id, status);
    this.loggingServices.logStatusChange(status);
    //console.log('A server changed, new status: '+  status);
  }

  constructor(private loggingServices: LoggingService, private accountsService:AccountServices) {
    
  }

  ngOnInit() {
  }

}
