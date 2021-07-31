import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDragonComponent } from './page/details-dragon.component';

const routes: Routes = [{ path: '', component: DetailsDragonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsDragonRoutingModule {}
