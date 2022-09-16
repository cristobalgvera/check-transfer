import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { GetAccountTypeDto } from '@check/server/shared-dtos';
import { InjectModel } from '@nestjs/mongoose';
import { AccountType, AccountTypeDocument } from './account-type.schema';
import { Model } from 'mongoose';

@Injectable()
export class AccountTypeService {
  constructor(
    @InjectModel(AccountType.name)
    private readonly accountTypeModel: Model<AccountTypeDocument>
  ) {}

  getAccountTypes(): Observable<GetAccountTypeDto[]> {
    return from(this.accountTypeModel.find().exec());
  }
}
