import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDragonRoutingModule } from './details-dragon-routing.module';
import { DetailsDragonComponent } from './page/details-dragon.component';

@NgModule({
  declarations: [DetailsDragonComponent],
  imports: [CommonModule, DetailsDragonRoutingModule],
})
export class DetailsDragonModule {}
