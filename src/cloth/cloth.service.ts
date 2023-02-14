import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Cloth } from './cloth.entity';

@Injectable()
export class ClothService {
  constructor(
    @InjectRepository(Cloth)
    private clothRepository: Repository<Cloth>,
  ) { }

  async findAll(): Promise<Cloth[]> {
    return await this.clothRepository.find()
  }

  async findOne(id: number): Promise<Cloth> {
    return await this.clothRepository.findOneById(id)
  }

  async create(cloth: Cloth): Promise<Cloth> {

    return await this.clothRepository.save(cloth);

  }

  async update(id: number, cloth: Cloth): Promise<UpdateResult> {
    return await this.clothRepository.update(id, cloth)
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.clothRepository.delete(id);
  }
}
