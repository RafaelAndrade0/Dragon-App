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
  ) {}

  public dragons: Dragon[] = [];
  public $showEditDragonForm = this.dragonService.$showEditDragonForm;
  public $showDeleteDragon = this.dragonService.$showDeleteDragon;
  public selectedDragon: Dragon = {
    id: '1',
    name: '',
    type: '',
    histories: '',
    createdAt: new Date(),
  };

  ngOnInit(): void {
    this.dragonService
      .listDragons()
      .subscribe((dragons) => (this.dragons = dragons));

    this.dragonService.$selectedDragon.subscribe(
      (dragon) => (this.selectedDragon = dragon)
    );
  }

  addDragon() {
    this.router.navigate(['../add-dragon'], { relativeTo: this.route });
  }

  editDragon(editedDragon: Dragon) {
    this.dragonService.editDragon(editedDragon).subscribe(
      (dragon) => {
        console.log(dragon);
        this.editDragonOptimisticUpdate(editedDragon);
        this.dragonService.setShowEditDragonForm(false);
        this.toastr.success('Dragão editado com sucesso!', 'Show! 😄');
      },
      (error) => {
        this.toastr.error(error.message, '😕 Oooppps...!');
      }
    );
  }

  deleteDragon() {
    this.dragonService.deleteDragon(this.selectedDragon.id).subscribe(
      (_) => {
        this.toastr.success('Dragão deletado com sucesso!', 'Show! 😄');
        this.deleteDragonOptimisticUpdate();
        this.dragonService.setShowDeleteDragon(false);
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

  deleteDragonOptimisticUpdate() {
    this.dragons = this.dragons.filter(
      (dragon) => dragon.id !== this.selectedDragon.id
    );
  }
}
