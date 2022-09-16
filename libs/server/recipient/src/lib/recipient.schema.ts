import { BankModel, RecipientModel } from '@check/shared/models';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { AccountType } from '@check/server/account-type';

export type RecipientDocument = Recipient & Document;

type Bank = Record<keyof BankModel, unknown>;

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

  @Prop(
    raw(<Bank>{
      id: { type: String, required: true },
      name: { type: String, required: true },
    })
  )
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
