import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { VeiculosDTO } from './veiculos.dto';

@Injectable()
export class VeiculosService {
    constructor(private prisma: PrismaService) { }

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
