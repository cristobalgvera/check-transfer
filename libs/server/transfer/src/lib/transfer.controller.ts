import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { CreateTransferDto, GetTransferDto } from '@check/server/shared-dtos';
import { Observable } from 'rxjs';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  createTransaction(
    @Body() createTransferDto: CreateTransferDto
  ): Observable<void> {
    return this.transferService.createTransfer(createTransferDto);
  }

  @Get()
  getTransfers(): Observable<GetTransferDto[]> {
    return this.transferService.getTransfers();
  }
}
