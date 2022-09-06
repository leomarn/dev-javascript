import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '../infrastructure/database/prisma.repository';
import { VeiculosDTO } from './dto/home-product.dto';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaRepository) { }

    async create(data: VeiculosDTO) {
        const veiculo = await this.prisma.veiculos.create({
            data,
        });
        return veiculo
    }

    async findAll(){
        return this.prisma.veiculos.findMany();
    }
    
    async findUniqueId(id: number){
        const veiculoExists = await this.prisma.veiculos.findUnique({
            where: {
                id,
            },
        });

        if(!veiculoExists){
            throw new Error('Veiculo não existe!');
        }

        return veiculoExists;
    }

    async update(id: number, data: VeiculosDTO){
        
        const veiculoExists = await this.prisma.veiculos.findUnique({
            where: {
                id,
            },
        });

        if(!veiculoExists){
            throw new Error('Veiculo não existe!');
        }

        return await this.prisma.veiculos.update({
            data,
            where: {
                id,
            }
        });

    }

    async delete(id: number){
        const veiculoExists = await this.prisma.veiculos.findUnique({
            where: {
                id,
            },
        });

        if(!veiculoExists){
            throw new Error('Veiculo não existe!');
        }

        return await this.prisma.veiculos.delete({
            where: {
                id,
            },
        });

    }
}
