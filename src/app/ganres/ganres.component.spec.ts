import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanresComponent } from './ganres.component';

describe('GanresComponent', () => {
  let component: GanresComponent;
  let fixture: ComponentFixture<GanresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
