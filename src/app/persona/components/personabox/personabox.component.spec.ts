import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaboxComponent } from './personabox.component';

describe('PersonaboxComponent', () => {
  let component: PersonaboxComponent;
  let fixture: ComponentFixture<PersonaboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
