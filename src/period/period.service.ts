import { Injectable } from '@nestjs/common';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { Period } from './entities/period.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PeriodService {
  constructor(
    @InjectRepository(Period)
    private readonly repository: Repository<Period>,
  ) {}
  async create(createPeriodDto: CreatePeriodDto) {
    return await this.repository.save(createPeriodDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updatePeriodDto: UpdatePeriodDto) {
    return await this.repository.update(id, updatePeriodDto);
  }

  async remove(id: string) {
    return await this.repository.delete(id);
  }
}
