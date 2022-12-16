import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocationRadiusComponent } from './add-location-radius.component';

describe('AddLocationRadiusComponent', () => {
  let component: AddLocationRadiusComponent;
  let fixture: ComponentFixture<AddLocationRadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLocationRadiusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLocationRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
