import { TransferModel, TransferModelDestination } from '@check/shared/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DestinationSchema } from '@check/server/shared-schemas';
import { Document } from 'mongoose';

export type TransferDocument = Transfer & Document;

@Schema()
export class Transfer implements TransferModel {
  @Prop({ required: true })
  amount!: number;

  @Prop({
    required: true,
    type: DestinationSchema,
  })
  destination!: TransferModelDestination;

  @Prop({ required: true })
  origin!: string;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);
