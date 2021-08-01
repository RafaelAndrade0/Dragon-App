import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DragonService } from 'src/app/data/service/dragon.service';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-details-dragon',
  templateUrl: './details-dragon.component.html',
  styleUrls: ['./details-dragon.component.css'],
})
export class DetailsDragonComponent implements OnInit {
  constructor(
    private dragonService: DragonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public selectedDragon: Dragon = {
    id: '',
    name: '',
    type: '',
    histories: '',
    createdAt: new Date(),
  };

  private id: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((param) => (this.id = param.id));
    this.dragonService.$selectedDragon.pipe(take(1)).subscribe((dragon) => {
      this.selectedDragon = dragon;
      if (!!!this.selectedDragon.id) {
        this.showDetails();
      }
    });
  }

  showDetails() {
    this.dragonService.listDragon(this.id).subscribe(
      (dragon) => (this.selectedDragon = dragon),
      (_) => {
        this.router.navigate(['../../home'], { relativeTo: this.route });
      }
    );
  }
}
