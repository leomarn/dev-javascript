import { Module } from '@nestjs/common';
import { ClientService } from './clients.service';
import { ClientController } from './clients.controller';
import { PrismaRepository } from '../infrastructure/database/prisma.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService, PrismaRepository]
})
export class ClientModule {}
