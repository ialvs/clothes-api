import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ClothService } from './cloth.service';
import { Cloth } from './cloth.entity';

@Controller('api/v1/clothes')
export class ClothController {
    constructor(private clothService: ClothService) { }

    @Get()
    async GetAll(): Promise<Cloth[]> {
        return await this.clothService.findAll()
    }

    @Post()
    async Create(@Body() cloth: Cloth): Promise<Cloth> {
        return await this.clothService.create(cloth)
    }

    @Get(':id')
    async GetOne(@Param('id') id: number): Promise<Cloth> {
        return await this.clothService.findOne(id)
    }

    @Delete(':id')
    async Delete(@Param() id: number): Promise<DeleteResult> {

        return await this.clothService.remove(id)
    }

    @Put(':id')
    async Update(@Param() id: number, @Body() cloth: Cloth): Promise<UpdateResult> {
        return await this.clothService.update(id, cloth);

    }

    @Get('/user/:id')
    async GetByUser(@Param('id') id: number) {
        return await this.clothService.findByUser(id)
    }

    @Get('/:clothId/user/:userId')
    async GetOneByUser(@Param('clothId') clothId: number, @Param('userId') userId: number){
        return await this.clothService.findOneByUser(clothId,userId)
    }

}