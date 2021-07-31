import { Component, Input, OnInit } from '@angular/core';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.css'],
})
export class DragonCardComponent implements OnInit {
  @Input() dragon: Dragon = {
    id: '1',
    name: '',
    type: '',
    histories: '',
    createdAt: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}
}
