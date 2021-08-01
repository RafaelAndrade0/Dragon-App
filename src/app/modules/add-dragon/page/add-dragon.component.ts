import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DragonService } from 'src/app/data/service/dragon.service';
import { Dragon } from 'src/app/data/types/dragon';

@Component({
  selector: 'app-add-dragon',
  templateUrl: './add-dragon.component.html',
  styleUrls: ['./add-dragon.component.css'],
})
export class AddDragonComponent implements OnInit {
  constructor(
    private dragonService: DragonService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit(dragon: Dragon) {
    this.dragonService.addDragon(dragon).subscribe(
      (_) => {
        this.toastr.success('Dragão adicionado com sucesso!', 'Show! 😄');
        this.router.navigate(['../home'], { relativeTo: this.route });
      },
      (error) => {
        this.toastr.error(error.message, '😕 Oooppps...!');
      }
    );
  }
}
