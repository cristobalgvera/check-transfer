import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipientFormComponent } from './add-recipient-form.component';

describe('AddRecipientFormComponent', () => {
  let component: AddRecipientFormComponent;
  let fixture: ComponentFixture<AddRecipientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRecipientFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRecipientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
