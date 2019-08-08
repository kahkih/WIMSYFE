import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinditemComponent } from './finditem.component';

describe('FinditemComponent', () => {
  let component: FinditemComponent;
  let fixture: ComponentFixture<FinditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
