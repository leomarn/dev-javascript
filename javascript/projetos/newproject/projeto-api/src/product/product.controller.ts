import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductService } from './product.service';
import { VeiculosDTO } from './dto/home-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../infrastructure/config/multer.config';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @UseInterceptors(FileInterceptor('image', multerOptions))
  @Post('upload')
  uploadFile(@Body() data: VeiculosDTO, @UploadedFile() image: Express.Multer.File,) {  
    if(!isNaN(data.price/1)){
      data.price = Number(data.price)
    }
    //data.image = image.path.replace('\\','/').replace('client/public','')
    data.image = image.path.replace('\\','/')
    return this.productService.create(data)
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findUniqueId(@Param('id') id: string) {
    const idInt = parseInt(id)
    return this.productService.findUniqueId(idInt);
  }

  @UseInterceptors(FileInterceptor('image', multerOptions))
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VeiculosDTO, @UploadedFile() image: Express.Multer.File,) {
    if(!isNaN(data.price/1)){
      data.price = Number(data.price)
    }
    //data.image = image.path.replace('\\','/').replace('client/public','')
    data.image = image.path.replace('\\','/')

    const idInt = parseInt(id)
    return this.productService.update(idInt, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    
    const idInt = parseInt(id)
    return this.productService.delete(idInt)
  }
}

