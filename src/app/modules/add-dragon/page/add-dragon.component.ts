import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/data/service/dragon.service';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-add-dragon',
  templateUrl: './add-dragon.component.html',
  styleUrls: ['./add-dragon.component.css'],
})
export class AddDragonComponent implements OnInit {
  constructor(private dragonService: DragonService) {}

  ngOnInit(): void {}

  submit(dragon: Dragon) {
    console.log(dragon);
    this.dragonService
      .addDragon(dragon)
      .subscribe((dragon) => console.log(dragon));
  }
}
