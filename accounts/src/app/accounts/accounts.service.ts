import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import crypto from 'node:crypto';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAccountDto: CreateAccountDto) {
    const code = crypto.randomUUID().replace(/\D/g, '').concat('-0');

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
