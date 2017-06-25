import { Component, NgZone} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AutocompletePage } from '../../components/autocomplete/autocomplete';
import { SaveInfoPage} from '../save-info/save-info';


import { DataStorageProvider } from '../../providers/data-storage/data-storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  //saveInfo = SaveInfoPage;
  private items: string[];
  listitme:string= '' ;
  address;
  autocompleteItems: any;
  autocomplete: any;
  acService:any;
  placesService: any;

  params: Object;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataStorage: DataStorageProvider ) {
    this.initializeItems();
    this.address = {
      place: ''
    };

    this.dataStorage

    this.params = { id: 42 };
  }





   initializeItems() {
    this.items = [
      'Harvey Burton',
      'Barnett Crosby',
      'Peck Brock',
      'Rachel Robinson',
      'Suzette Frazier',
      'Bettie Maddox',
      'Haley Bates',
      'Tania Chandler',
      'Woods Nicholson'
    ]
  }

  ngOnInit() {
  this.acService = new google.maps.places.AutocompleteService();        
  this.autocompleteItems = [];
  this.autocomplete = {
    query: ''
    };        
  }
  chooseItem(item){
    console.log(item);
    this.dataStorage.storeData(item);
    let items = item;
    let itemsSplit = items.split(",");
    console.log(itemsSplit[0]);
    
    let data = {
      address: items,
    
    }
    
    this.navCtrl.push(SaveInfoPage, data);
    this.autocomplete.query = item;
  }

  updateSearch(item) {
  console.log('modal > updateSearch');
  if (this.autocomplete.query == '') {  
    this.autocompleteItems = [];
  return;
}


  let self = this; 
  let config = { 
    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
  input: this.autocomplete.query, 
  componentRestrictions: {  } 
  }

  this.acService.getPlacePredictions(config, function (predictions, status) {
  console.log('modal > getPlacePredictions > status > ', status);
  self.autocompleteItems = [];            
  predictions.forEach(function (prediction) {              
  self.autocompleteItems.push(prediction);
  });
  });
  }

}
