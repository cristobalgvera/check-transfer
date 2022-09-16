import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AccountTypeModel } from '@check/shared/models';

export type AccountTypeDocument = AccountType & Document;

@Schema()
export class AccountType implements AccountTypeModel {
  @Prop({ type: Types.ObjectId, required: true })
  _id!: string;

  @Prop({ required: true })
  name!: string;
}

export const AccountTypeSchema = SchemaFactory.createForClass(AccountType);
