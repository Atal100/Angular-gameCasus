import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersStartComponent } from './publishers-start.component';

describe('PublishersStartComponent', () => {
  let component: PublishersStartComponent;
  let fixture: ComponentFixture<PublishersStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishersStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
