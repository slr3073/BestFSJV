import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediasPageRoutingModule } from './medias-routing.module';

import { MediasPage } from './medias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediasPageRoutingModule
  ],
  declarations: [MediasPage]
})
export class MediasPageModule {}
