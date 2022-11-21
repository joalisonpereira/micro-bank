import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [CustomersController],
  providers: [
    CustomersService,
    PrismaService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: (kafkaService: ClientKafka) => kafkaService.connect(),
      inject: ['KAFKA_SERVICE'],
    },
  ],
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
})
export class CustomersModule {}
