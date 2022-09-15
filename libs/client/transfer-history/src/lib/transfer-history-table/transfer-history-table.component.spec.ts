import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferHistoryTableComponent } from './transfer-history-table.component';

describe('TransferHistoryTableComponent', () => {
  let component: TransferHistoryTableComponent;
  let fixture: ComponentFixture<TransferHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferHistoryTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransferHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
