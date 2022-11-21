import { Account } from '@prisma/client';

export class CreateAccountDto implements Pick<Account, 'client_id'> {
  client_id: string;
}
