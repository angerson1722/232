import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngPage } from './ang';

@NgModule({
  declarations: [
    AngPage,
  ],
  imports: [
    IonicPageModule.forChild(AngPage),
  ],
})
export class AngPageModule {}
