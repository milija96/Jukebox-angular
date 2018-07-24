import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanreMusicComponent } from './ganre-music.component';

describe('GanreMusicComponent', () => {
  let component: GanreMusicComponent;
  let fixture: ComponentFixture<GanreMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanreMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanreMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
