import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/data/service/dragon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dragonService: DragonService) {}

  ngOnInit(): void {
    console.log('teste');
    this.dragonService.listDragons().subscribe((dragon) => {
      console.log(dragon);
    });
  }
}
