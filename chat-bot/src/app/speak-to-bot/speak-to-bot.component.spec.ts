import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakToBotComponent } from './speak-to-bot.component';

describe('SpeakToBotComponent', () => {
  let component: SpeakToBotComponent;
  let fixture: ComponentFixture<SpeakToBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakToBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakToBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
