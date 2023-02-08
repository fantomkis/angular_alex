import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseblaComponent } from './reusebla.component';

describe('ReuseblaComponent', () => {
  let component: ReuseblaComponent;
  let fixture: ComponentFixture<ReuseblaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseblaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseblaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
