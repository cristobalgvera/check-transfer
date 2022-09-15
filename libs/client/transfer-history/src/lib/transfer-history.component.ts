import { Component, OnInit } from '@angular/core';
import { TransferService } from '@check/client/shared-services';
import { Observable } from 'rxjs';
import { GetTransferModel } from '@check/shared/models';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss'],
})
export class TransferHistoryComponent implements OnInit {
  protected transfers$!: Observable<GetTransferModel[]>;

  constructor(private readonly transferService: TransferService) {}

  ngOnInit(): void {
    this.transfers$ = this.transferService.getTransfers();
  }
}
