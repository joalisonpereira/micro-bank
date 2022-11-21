import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAccountDto: CreateAccountDto) {
    const code = uuidv4().replace(/\D/g, '').concat('-0');

    const account = { ...createAccountDto, code };

    return this.prismaService.account.create({ data: account });
  }

  findAll() {
    return this.prismaService.account.findMany();
  }

  findOne(id: string) {
    return this.prismaService.account.findUnique({ where: { id } });
  }
}
