import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GetTransferModel } from '@check/shared/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-transfer-history-table',
  templateUrl: './transfer-history-table.component.html',
  styleUrls: ['./transfer-history-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferHistoryTableComponent implements OnInit, AfterViewInit {
  @Input() transfers: GetTransferModel[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  protected transfersDataSource!: MatTableDataSource<GetTransferModel>;
  protected displayedColumns = [
    'Recipient',
    'RUT',
    'Bank',
    'Account Type',
    'Amount',
  ];

  ngOnInit(): void {
    this.transfersDataSource = new MatTableDataSource(this.transfers);
  }

  ngAfterViewInit(): void {
    this.transfersDataSource.paginator = this.paginator;
  }
}
