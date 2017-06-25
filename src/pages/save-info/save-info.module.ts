import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveInfoPage } from './save-info';

@NgModule({
  declarations: [
    SaveInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SaveInfoPage),
  ],
  exports: [
    SaveInfoPage
  ]
})
export class SaveInfoPageModule {}
