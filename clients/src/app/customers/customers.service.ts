import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.prismaService.customer.create({ data: createCustomerDto });
  }

  findAll() {
    return this.prismaService.customer.findMany();
  }

  findOne(id: string) {
    return this.prismaService.customer.findUnique({ where: { id } });
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.prismaService.customer.update({
      data: updateCustomerDto,
      where: { id: String(id) },
    });
  }

  remove(id: string) {
    return this.prismaService.customer.delete({
      where: { id: String(id) },
    });
  }
}
