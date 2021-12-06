import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldActionsComponent } from './field-actions.component';

describe('FieldActionsComponent', () => {
  let component: FieldActionsComponent;
  let fixture: ComponentFixture<FieldActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
