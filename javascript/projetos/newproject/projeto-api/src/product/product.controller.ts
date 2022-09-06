import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { VeiculosDTO } from './dto/home-product.dto';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() data: VeiculosDTO){
    return this.productService.create(data);
  }

  @Get()
  async findAll(){
    return this.productService.findAll();
  }

  @Get(':id')
  async findUniqueId(@Param('id') id: string){
    const idInt = parseInt(id)
    return this.productService.findUniqueId(idInt);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VeiculosDTO) {
    const idInt = parseInt(id)
    return this.productService.update(idInt, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    const idInt = parseInt(id)
    return this.productService.delete(idInt)
  }
}
