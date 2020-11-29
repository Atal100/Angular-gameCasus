import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersStartComponent } from './developers-start.component';

describe('DevelopersStartComponent', () => {
  let component: DevelopersStartComponent;
  let fixture: ComponentFixture<DevelopersStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopersStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
