import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecipientService } from './recipient.service';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { Observable } from 'rxjs';
import { GetRecipientDto } from './dto/get-recipient.dto';

@Controller('recipients')
export class RecipientController {
  constructor(private readonly recipientService: RecipientService) {}

  @Post()
  create(@Body() createRecipientDto: CreateRecipientDto) {
    this.recipientService.create(createRecipientDto);
  }

  @Get()
  findAll(): Observable<GetRecipientDto[]> {
    return this.recipientService.findAll();
  }
}
