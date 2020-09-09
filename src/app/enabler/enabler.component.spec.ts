import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnablerComponent } from './enabler.component';

describe('EnablerComponent', () => {
  let component: EnablerComponent;
  let fixture: ComponentFixture<EnablerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnablerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnablerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
