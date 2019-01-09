import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakToAgentComponent } from './speak-to-agent.component';
import { SafeHtml } from './speak-to-agent.component'

describe('SpeakToAgentComponent', () => {
  let component: SpeakToAgentComponent;
  let fixture: ComponentFixture<SpeakToAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakToAgentComponent, SafeHtml]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakToAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
