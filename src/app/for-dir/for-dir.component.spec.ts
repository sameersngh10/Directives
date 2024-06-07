import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDirComponent } from './for-dir.component';

describe('ForDirComponent', () => {
  let component: ForDirComponent;
  let fixture: ComponentFixture<ForDirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForDirComponent]
    });
    fixture = TestBed.createComponent(ForDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
