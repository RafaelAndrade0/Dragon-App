import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { DragonsComponent } from './page/dragons/dragons.component';
import { DragonCardComponent } from './page/dragon-card/dragon-card.component';

@NgModule({
  declarations: [HomeComponent, DragonsComponent, DragonCardComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
