import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { DragonsComponent } from './page/dragons/dragons.component';
import { DragonCardComponent } from './page/dragon-card/dragon-card.component';
import { FormsModule } from '@angular/forms';
import { EditDragonComponent } from './page/edit-dragon/edit-dragon.component';
import { DeleteDragonComponent } from './page/delete-dragon/delete-dragon.component';

@NgModule({
  declarations: [HomeComponent, DragonsComponent, DragonCardComponent, EditDragonComponent, DeleteDragonComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
