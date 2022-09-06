import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { VeiculosDTO } from './veiculos.dto';
import { VeiculosService } from './veiculos.service';

@Controller('veiculos')
export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) {}

  @Post()
  async create(@Body() data: VeiculosDTO){
    return this.veiculosService.create(data);
  }

  @Get()
  async findAll(){
    return this.veiculosService.findAll();
  }

  @Get(':id')
  async findUniqueId(@Param('id') id: string){
    const idInt = parseInt(id)
    return this.veiculosService.findUniqueId(idInt);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VeiculosDTO) {
    const idInt = parseInt(id)
    return this.veiculosService.update(idInt, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    const idInt = parseInt(id)
    return this.veiculosService.delete(idInt)
  }
  
}
