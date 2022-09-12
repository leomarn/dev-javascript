import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { VeiculosDTO } from './dto/home-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile() image: Express.Multer.File, @Body() data: VeiculosDTO) {
    data.image = image.buffer.toString('base64')
    if(data.image){
      data.image = image.buffer.toString('base64')
    }else{
      data.image = "Sem imagem cadastrada!"
    }
    if(!isNaN(data.price/1)){
      data.price = Number(data.price)
    }
    return this.productService.create(data)
  }

  // @Post()
  // async create(@Body() data: VeiculosDTO) {
  //   return this.productService.create(data);
  // }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findUniqueId(@Param('id') id: string) {
    const idInt = parseInt(id)
    return this.productService.findUniqueId(idInt);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VeiculosDTO) {
    const idInt = parseInt(id)
    return this.productService.update(idInt, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const idInt = parseInt(id)
    return this.productService.delete(idInt)
  }
}
