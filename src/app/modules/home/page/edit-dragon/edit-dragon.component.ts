import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DragonService } from 'src/app/data/service/dragon.service';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-edit-dragon',
  templateUrl: './edit-dragon.component.html',
  styleUrls: ['./edit-dragon.component.css'],
})
export class EditDragonComponent implements OnInit, OnDestroy {
  constructor(private dragonService: DragonService) {}

  public selectedDragon: Dragon = {
    id: '',
    name: '',
    type: '',
    histories: '',
    createdAt: new Date(),
  };

  public subscription: Subscription = new Subscription();

  @Output() editDragonEmitter = new EventEmitter<Dragon>();

  ngOnInit(): void {
    this.subscription = this.dragonService.$selectedDragon.subscribe(
      (dragon) => {
        this.selectedDragon = dragon;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editDragon(editedDragon: Dragon) {
    this.editDragonEmitter.emit({
      ...editedDragon,
      id: this.selectedDragon.id,
      createdAt: this.selectedDragon.createdAt,
    });
  }

  cancelEdit() {
    this.dragonService.setShowEditDragonForm(false);
  }
}
