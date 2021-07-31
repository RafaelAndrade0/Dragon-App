import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDragonComponent } from './details-dragon.component';

describe('DetailsDragonComponent', () => {
  let component: DetailsDragonComponent;
  let fixture: ComponentFixture<DetailsDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDragonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
