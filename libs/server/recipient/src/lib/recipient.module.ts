import { Module } from '@nestjs/common';
import { RecipientController } from './recipient.controller';
import { RecipientService } from './recipient.service';
import { AuthModule } from '@check/server/auth';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipient, RecipientSchema } from './recipient.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: Recipient.name, schema: RecipientSchema },
    ]),
  ],
  controllers: [RecipientController],
  providers: [RecipientService],
  exports: [RecipientService, MongooseModule],
})
export class RecipientModule {}
