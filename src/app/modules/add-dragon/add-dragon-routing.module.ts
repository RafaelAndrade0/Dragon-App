import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDragonComponent } from './page/add-dragon.component';

const routes: Routes = [{ path: '', component: AddDragonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDragonRoutingModule {}
