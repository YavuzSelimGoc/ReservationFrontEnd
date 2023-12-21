import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessPublicComponent } from './add-business-public.component';

describe('AddBusinessPublicComponent', () => {
  let component: AddBusinessPublicComponent;
  let fixture: ComponentFixture<AddBusinessPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBusinessPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBusinessPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
