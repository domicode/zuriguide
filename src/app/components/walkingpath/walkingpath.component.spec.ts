import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingpathComponent } from './walkingpath.component';

describe('WalkingpathComponent', () => {
  let component: WalkingpathComponent;
  let fixture: ComponentFixture<WalkingpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
