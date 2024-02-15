import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentBookComponent } from './lent-book.component';

describe('LentBookComponent', () => {
  let component: LentBookComponent;
  let fixture: ComponentFixture<LentBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LentBookComponent]
    });
    fixture = TestBed.createComponent(LentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
