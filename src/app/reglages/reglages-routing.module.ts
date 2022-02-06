import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReglagesPage } from './reglages.page';

const routes: Routes = [
  {
    path: '',
    component: ReglagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReglagesPageRoutingModule {}
