import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomessageComponent } from './infomessage.component';

describe('InfomessageComponent', () => {
  let component: InfomessageComponent;
  let fixture: ComponentFixture<InfomessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
