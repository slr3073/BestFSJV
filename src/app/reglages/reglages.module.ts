import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReglagesPageRoutingModule } from './reglages-routing.module';

import { ReglagesPage } from './reglages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReglagesPageRoutingModule
  ],
  declarations: [ReglagesPage]
})
export class ReglagesPageModule {}
