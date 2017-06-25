import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AutocompletePage } from './autocomplete';

@NgModule({
  declarations: [
    AutocompletePage,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AutocompletePage
  ]
})
export class AutocompletePageModule {}
