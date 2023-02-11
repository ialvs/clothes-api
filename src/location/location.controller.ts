import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import {UpdateResult, DeleteResult} from 'typeorm';
import { LocationService } from './location.service';
import { Location } from './location.entity';

@Controller('api/v1/locations')
export class LocationController {
 constructor(private locationService: LocationService) { }

@Get()
async GetAll(): Promise<Location[]>{
    return await this.locationService.findAll()
}

@Post()
async Create(@Body() location: Location): Promise<Location>{
    return await this.locationService.create(location)
}

@Get(':id')
async GetOne(@Param() id:number): Promise<Location>{
    return await this.locationService.findOne(id)
}

@Delete(':id')
async Delete(@Param() id: number): Promise<DeleteResult>{

    return await this.locationService.remove(id)
}

@Put(':id')
 async Update(@Param() id: number, @Body() location : Location): Promise<UpdateResult> {
   return await this.locationService.update(id, location);

 }

}