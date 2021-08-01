import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DragonService } from 'src/app/data/service/dragon.service';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-delete-dragon',
  templateUrl: './delete-dragon.component.html',
  styleUrls: ['./delete-dragon.component.css'],
})
export class DeleteDragonComponent implements OnInit {
  constructor(private dragonService: DragonService) {}
  @Output() deleteDragonEmitter = new EventEmitter();
  @Input() selectedDragon: Dragon = {
    id: '1',
    name: '',
    type: '',
    histories: '',
    createdAt: new Date(),
  };

  ngOnInit(): void {}

  cancelDelete() {
    this.dragonService.setShowDeleteDragon(false);
  }

  deleteDragon() {
    this.deleteDragonEmitter.emit();
  }
}
