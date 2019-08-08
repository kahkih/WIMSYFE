import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveitemComponent } from './moveitem.component';

describe('MoveitemComponent', () => {
  let component: MoveitemComponent;
  let fixture: ComponentFixture<MoveitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
