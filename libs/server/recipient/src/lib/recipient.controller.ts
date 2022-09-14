import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecipientService } from './recipient.service';
import { Observable } from 'rxjs';
import { CreateRecipientDto, GetRecipientDto } from '@check/server/shared-dtos';

@Controller('recipients')
export class RecipientController {
  constructor(private readonly recipientService: RecipientService) {}

  @Post()
  create(@Body() createRecipientDto: CreateRecipientDto): void {
    this.recipientService.create(createRecipientDto);
  }

  @Get()
  findAll(): Observable<GetRecipientDto[]> {
    return this.recipientService.findAll();
  }
}
