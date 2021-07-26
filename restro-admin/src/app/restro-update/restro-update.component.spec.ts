import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroUpdateComponent } from './restro-update.component';

describe('RestroUpdateComponent', () => {
  let component: RestroUpdateComponent;
  let fixture: ComponentFixture<RestroUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestroUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
