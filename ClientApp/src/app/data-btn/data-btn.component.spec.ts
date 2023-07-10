import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBtnComponent } from './data-btn.component';

describe('DataBtnComponent', () => {
  let component: DataBtnComponent;
  let fixture: ComponentFixture<DataBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
