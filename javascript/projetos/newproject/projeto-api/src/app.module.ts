import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
