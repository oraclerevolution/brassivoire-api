import { Injectable } from '@nestjs/common';
import { CreateCompteurDto } from './dto/create-compteur.dto';
import { UpdateCompteurDto } from './dto/update-compteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Compteur } from './entities/compteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompteursService {
  constructor(
    @InjectRepository(Compteur)
    private repository: Repository<Compteur>,
  ) {}
  async create(createCompteurDto: CreateCompteurDto) {
    return await this.repository.save(createCompteurDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateCompteurDto: UpdateCompteurDto) {
    return await this.repository.update(id, updateCompteurDto);
  }

  async remove(id: string) {
    return await this.repository.delete(id);
  }
}
