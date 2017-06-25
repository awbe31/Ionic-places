import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataStorageProvider } from '../../providers/data-storage/data-storage'
/**
 * Generated class for the SaveInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-save-info',
  templateUrl: 'save-info.html',
})
export class SaveInfoPage {

  results:any;
  properties:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataStorage: DataStorageProvider) {

   //this.results = "the word";
  }

  loadData(){
   this.results = this.dataStorage.userAddress
   
    console.log(this.results);
  }
  test(){
     console.log(this.results[0])
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveInfoPage');
    let results = this.navParams.get('address');
    this.loadData();
    this.test();
    
   
  }
 
  

}
