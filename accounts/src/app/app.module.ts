import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [AccountsModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
