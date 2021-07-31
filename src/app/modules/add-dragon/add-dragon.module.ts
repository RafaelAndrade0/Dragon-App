import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDragonRoutingModule } from './add-dragon-routing.module';
import { AddDragonComponent } from './page/add-dragon.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddDragonComponent],
  imports: [CommonModule, AddDragonRoutingModule, FormsModule],
})
export class AddDragonModule {}
