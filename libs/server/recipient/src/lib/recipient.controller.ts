import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecipientService } from './recipient.service';
import { Observable } from 'rxjs';
import { CreateRecipientDto, GetRecipientDto } from '@check/server/shared-dtos';
import { Recipient } from './recipient.schema';

@Controller('recipients')
export class RecipientController {
  constructor(private readonly recipientService: RecipientService) {}

  @Post()
  create(
    @Body() createRecipientDto: CreateRecipientDto
  ): Observable<Recipient> {
    return this.recipientService.create(createRecipientDto);
  }

  @Get()
  findAll(): Observable<GetRecipientDto[]> {
    return this.recipientService.findAll();
  }
}
