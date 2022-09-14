import { Test } from '@nestjs/testing';
import { RecipientService } from './recipient.service';

describe('ServerRecipientService', () => {
  let service: RecipientService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RecipientService],
    }).compile();

    service = module.get(RecipientService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
