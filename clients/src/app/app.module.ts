import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from 'src/app/customers/customers.module';

@Module({
  imports: [ConfigModule.forRoot(), CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
