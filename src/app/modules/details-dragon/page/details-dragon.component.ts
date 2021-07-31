import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonService } from 'src/app/data/service/dragon.service';

@Component({
  selector: 'app-details-dragon',
  templateUrl: './details-dragon.component.html',
  styleUrls: ['./details-dragon.component.css'],
})
export class DetailsDragonComponent implements OnInit {
  constructor(
    private dragonService: DragonService,
    private route: ActivatedRoute
  ) {}

  public $selectedDragon = this.dragonService.$selectedDragon;

  ngOnInit(): void {
    // this.$selectedDragon.subscribe((dragon) => console.log(dragon));
  }
}
