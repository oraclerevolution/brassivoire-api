import { Injectable } from '@nestjs/common';
import { CreateTypeCompteurDto } from './dto/create-type-compteur.dto';
import { UpdateTypeCompteurDto } from './dto/update-type-compteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeCompteur } from './entities/type-compteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeCompteurService {
  constructor(
    @InjectRepository(TypeCompteur)
    private readonly repository: Repository<TypeCompteur>,
  ) {}
  async create(createTypeCompteurDto: CreateTypeCompteurDto) {
    return await this.repository.save(createTypeCompteurDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateTypeCompteurDto: UpdateTypeCompteurDto) {
    return await this.repository.update(id, updateTypeCompteurDto);
  }

  async remove(id: string) {
    return await this.repository.delete(id);
  }
}
