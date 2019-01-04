import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperatorChatComponent } from './user-operator-chat.component';

describe('UserOperatorChatComponent', () => {
  let component: UserOperatorChatComponent;
  let fixture: ComponentFixture<UserOperatorChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOperatorChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOperatorChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
