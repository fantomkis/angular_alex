import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustPeopleComponent } from './just-people.component';

describe('JustPeopleComponent', () => {
  let component: JustPeopleComponent;
  let fixture: ComponentFixture<JustPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
