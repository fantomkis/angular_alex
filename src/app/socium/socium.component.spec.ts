import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociumComponent } from './socium.component';

describe('SociumComponent', () => {
  let component: SociumComponent;
  let fixture: ComponentFixture<SociumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
