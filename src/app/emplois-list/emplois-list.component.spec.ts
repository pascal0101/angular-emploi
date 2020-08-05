import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploisListComponent } from './emplois-list.component';

describe('EmploisListComponent', () => {
  let component: EmploisListComponent;
  let fixture: ComponentFixture<EmploisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
