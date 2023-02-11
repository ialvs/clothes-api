import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothService } from './cloth.service';
import { ClothController } from './cloth.controller';
import { Cloth } from './cloth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cloth])],
  providers: [ClothService],
  controllers: [ClothController],
})

export class ClothModule {}