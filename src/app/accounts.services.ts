import { LoggingService } from "./logging.services";
import { Injectable } from "@angular/core";


@Injectable()
export class AccountServices {
    accounts = [
        {name: 'Master Account', status: 'active'},
        {name: 'Test Account', status: 'inactive'},
        {name: 'Hidden Account', status:'hidden'}
      ];

      constructor(private loggingServices: LoggingService){
          
      }

      addAccount(name:string, status:string) {
          this.accounts.push({name:name, status:status});
      }

      updateStatus(id:number, status:string){
          this.accounts[id].status = status;
      }

}