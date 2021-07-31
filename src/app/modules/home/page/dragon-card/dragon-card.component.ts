import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonService } from 'src/app/data/service/dragon.service';
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

  constructor(
    private dragonService: DragonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  goToDetailsDragon() {
    this.dragonService.setSelectedDragon(this.dragon);
    this.router.navigate([`../details-dragon/${this.dragon.id}`], {
      relativeTo: this.route,
    });
  }

  showEditCard() {
    this.dragonService.setSelectedDragon(this.dragon);
    this.dragonService.setEditDragon(true);
  }
}
