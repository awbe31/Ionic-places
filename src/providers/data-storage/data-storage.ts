import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataStorageProvider {
  userAddress: object;
  constructor() {
    this.userAddress = null;
    //console.log('Hello DataStorageProvider Provider');
  }

  storeData(item: any){
    
    let items = item;
    let itemsSplit = item.split(",");
    this.userAddress = [{
      street: itemsSplit[0],
      city: itemsSplit[1],
      state: itemsSplit[2]
    }]

    
  }

  returnData(){
      let items = JSON.stringify(this.userAddress);
      return Promise.resolve(this.userAddress);

  }

  

}
