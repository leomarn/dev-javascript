import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module';
import { MulterModule } from '@nestjs/platform-express';
import { ClientModule } from './clients/clients.module';

@Module({
  imports: [ProductModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
