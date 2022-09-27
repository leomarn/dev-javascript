import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '../infrastructure/database/prisma.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaRepository) { }

  async create(data: CreateClientDto) {
    const client = await this.prisma.client.create({
      data,
    })
    return client;
  }

  async findAll() {
    return this.prisma.client.findMany();
  }

  async findOne(id: number) {
    const client = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if (!client) {
      throw new Error(`Client de id# ${id} inexistente`);
    }
    return client;
  }

  async update(id: number, data: UpdateClientDto) {
    const client = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if (!client) {
      throw new Error(`Client de id# ${id} inexistente`);
    }
    return await this.prisma.client.update({
      data,
      where: {
        id,
      }
    });
  }

  async remove(id: number) {
    const client = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if (!client) {
      throw new Error(`Client de id# ${id} inexistente`);
    }

    return await this.prisma.client.delete({
      where: {
        id,
      },
    });
  }
}
