import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonService } from 'src/app/data/service/dragon.service';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css'],
})
export class DragonsComponent implements OnInit {
  constructor(
    private dragonService: DragonService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dragonService
      .listDragons()
      .subscribe((dragons) => (this.dragons = dragons));
  }

  public dragons: Dragon[] = [];
  public $showEditDragon = this.dragonService.$editDragon;

  ngOnInit(): void {}

  addDragon() {
    this.router.navigate(['../add-dragon'], { relativeTo: this.route });
  }
}
