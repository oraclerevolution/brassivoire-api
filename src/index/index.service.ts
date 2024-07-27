import { Injectable } from '@nestjs/common';
import { CreateIndexDto } from './dto/create-index.dto';
import { UpdateIndexDto } from './dto/update-index.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Index } from './entities/index.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IndexService {
  constructor(
    @InjectRepository(Index) private readonly repository: Repository<Index>,
  ) {}

  async create(createIndexDto: CreateIndexDto) {
    return await this.repository.save(createIndexDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateIndexDto: UpdateIndexDto) {
    return await this.repository.update(id, updateIndexDto);
  }

  async remove(id: string) {
    return await this.repository.delete(id);
  }
}
