import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploisDetailsComponent } from './emplois-details.component';

describe('EmploisDetailsComponent', () => {
  let component: EmploisDetailsComponent;
  let fixture: ComponentFixture<EmploisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
