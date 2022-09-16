import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BankModel } from '@check/shared/models';

@Schema({ _id: false })
export class Bank implements BankModel {
  @Prop({ required: true })
  id!: string;

  @Prop({ required: true })
  name!: string;
}

export const BankSchema = SchemaFactory.createForClass(Bank);
