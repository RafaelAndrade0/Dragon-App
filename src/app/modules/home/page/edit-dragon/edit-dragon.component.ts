import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DragonService } from 'src/app/data/service/dragon.service';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-edit-dragon',
  templateUrl: './edit-dragon.component.html',
  styleUrls: ['./edit-dragon.component.css'],
})
export class EditDragonComponent implements OnInit {
  constructor(private dragonService: DragonService) {}

  selectedDragon: Dragon = {
    id: '',
    name: '',
    type: '',
    histories: '',
    createdAt: new Date(),
  };

  @Output() editDragonEmitter = new EventEmitter<Dragon>();

  ngOnInit(): void {
    this.dragonService.$selectedDragon.subscribe((dragon) => {
      this.selectedDragon = dragon;
    });
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
