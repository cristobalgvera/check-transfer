import { BankModel, RecipientModel } from '@check/shared/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { AccountType } from '@check/server/account-type';
import { BankSchema } from '@check/server/shared-schemas';

export type RecipientDocument = Recipient & Document;

@Schema()
export class Recipient implements RecipientModel {
  @Prop({ required: true })
  origin!: string;

  @Prop({ required: true, unique: true })
  accountNumber!: string;

  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    ref: AccountType.name,
  })
  accountType!: AccountType;

  @Prop({ required: true, type: BankSchema })
  bank!: BankModel;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  rut!: string;

  @Prop()
  email!: string;

  @Prop()
  phone!: string;
}

export const RecipientSchema = SchemaFactory.createForClass(Recipient);
