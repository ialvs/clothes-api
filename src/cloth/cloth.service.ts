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
    return await this.clothRepository.findOne({
      where: { id: id }
    })
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

  async findByUser(id: number): Promise<Cloth[]> {
    return await this.clothRepository.find({
      relations: { user: true },
      where: {
        user: {
          id: id
        }
      }
    }
    )
  }

  async findOneByUser(clothId: number, userId: number): Promise<Cloth> {
    return await this.clothRepository.findOne({
      relations: {user: true},
      where: {id: clothId, user: {id: userId}}
    })
  }
}
