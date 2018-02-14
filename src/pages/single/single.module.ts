import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Single } from './single';

@NgModule({
  declarations: [
    Single,
  ],
  imports: [
    IonicPageModule.forChild(Single),
  ],
  exports: [
    Single
  ]
})
export class SingleModule {}
