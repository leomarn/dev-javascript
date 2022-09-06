import { Module } from '@nestjs/common';


import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [VeiculosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
