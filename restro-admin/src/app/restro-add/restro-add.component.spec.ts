import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroAddComponent } from './restro-add.component';

describe('RestroAddComponent', () => {
  let component: RestroAddComponent;
  let fixture: ComponentFixture<RestroAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestroAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestroAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
