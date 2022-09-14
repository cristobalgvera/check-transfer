import { Test } from '@nestjs/testing';
import { RecipientController } from './recipient.controller';
import { RecipientService } from './recipient.service';

describe('ServerRecipientController', () => {
  let controller: RecipientController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RecipientService],
      controllers: [RecipientController],
    }).compile();

    controller = module.get(RecipientController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
