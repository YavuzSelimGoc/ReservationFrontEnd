import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiveReservationComponent } from './list-active-reservation.component';

describe('ListActiveReservationComponent', () => {
  let component: ListActiveReservationComponent;
  let fixture: ComponentFixture<ListActiveReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActiveReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActiveReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
