import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariotComponent } from './chariot.component';

describe('ChariotComponent', () => {
  let component: ChariotComponent;
  let fixture: ComponentFixture<ChariotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChariotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
