import {
  AccountTypeModel,
  BankModel,
  TransferModelDestination,
} from '@check/shared/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BankSchema } from './bank.schema';
import { AccountType } from '@check/server/account-type';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ _id: false })
export class Destination implements TransferModelDestination {
  @Prop({ required: true })
  accountNumber!: string;

  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    ref: AccountType.name,
  })
  accountType!: AccountTypeModel;

  @Prop({ required: true, type: BankSchema })
  bank!: BankModel;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  rut!: string;
}

export const DestinationSchema = SchemaFactory.createForClass(Destination);
