import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSessionIdsComponent } from './view-all-session-ids.component';

describe('ViewAllSessionIdsComponent', () => {
  let component: ViewAllSessionIdsComponent;
  let fixture: ComponentFixture<ViewAllSessionIdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllSessionIdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllSessionIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
