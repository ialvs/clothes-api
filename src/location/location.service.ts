import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) { }

  async findAll(): Promise<Location[]> {
    return await this.locationRepository.find()
  }

  async findOne(id: number): Promise<Location> {
    return await this.locationRepository.findOneById(id)
  }

  async create(location: Location): Promise<Location> {

    return await this.locationRepository.save(location);

  }

  async update(id: number, location: Location): Promise<UpdateResult> {
    return await this.locationRepository.update(id, location)
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.locationRepository.delete(id);
  }
}
