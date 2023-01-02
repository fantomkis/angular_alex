import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTitelComponent } from './pipe-titel.component';

describe('PipeTitelComponent', () => {
  let component: PipeTitelComponent;
  let fixture: ComponentFixture<PipeTitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeTitelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
