import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.dragonService
      .listDragons()
      .subscribe((dragons) => (this.dragons = dragons));
  }

  public dragons: Dragon[] = [];
  public $showEditDragonForm = this.dragonService.$showEditDragonForm;

  ngOnInit(): void {}

  addDragon() {
    this.router.navigate(['../add-dragon'], { relativeTo: this.route });
  }

  editDragon(editedDragon: Dragon) {
    this.dragonService.editDragon(editedDragon).subscribe(
      (dragon) => {
        console.log(dragon);
        this.editDragonOptimisticUpdate(editedDragon);
        this.dragonService.setShowEditDragonForm(false);
      },
      (error) => {
        this.toastr.error(error.message, '😕 Oooppps...!');
      }
    );
  }

  editDragonOptimisticUpdate(editedDragon: Dragon) {
    const index = this.dragons.findIndex(
      (dragon) => dragon.id === editedDragon.id
    );
    this.dragons[index] = editedDragon;
  }
}
