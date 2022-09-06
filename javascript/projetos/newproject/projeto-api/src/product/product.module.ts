import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaRepository } from '../infrastructure/database/prisma.repository';


@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaRepository]
})
export class ProductModule {}
