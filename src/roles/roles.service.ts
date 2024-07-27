import { Injectable } from '@nestjs/common';
import { Role } from './entities/roles.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateRoleDto } from './dtos/update-role.dto';
import { CreateRoleDto } from './dtos/create-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async findOne(id: string): Promise<Role> {
    return this.roleRepository.findOne({ where: { id } });
  }

  async create(payload: CreateRoleDto): Promise<Role> {
    return this.roleRepository.save(payload);
  }

  async update(id: string, payload: UpdateRoleDto): Promise<UpdateResult> {
    return await this.roleRepository.update(id, payload);
  }
}
