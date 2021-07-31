import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/data/service/dragon.service';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css'],
})
export class DragonsComponent implements OnInit {
  public dragons: Dragon[] = [];

  constructor(private dragonService: DragonService) {
    this.dragonService
      .listDragons()
      .subscribe((dragons) => (this.dragons = dragons));
  }

  ngOnInit(): void {}
}
