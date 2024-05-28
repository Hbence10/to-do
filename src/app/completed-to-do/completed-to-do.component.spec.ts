import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedToDoComponent } from './completed-to-do.component';

describe('CompletedToDoComponent', () => {
  let component: CompletedToDoComponent;
  let fixture: ComponentFixture<CompletedToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedToDoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
