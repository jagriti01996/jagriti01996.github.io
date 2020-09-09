import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashedlineComponent } from './dashedline.component';

describe('DashedlineComponent', () => {
  let component: DashedlineComponent;
  let fixture: ComponentFixture<DashedlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashedlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashedlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
