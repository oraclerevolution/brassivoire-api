import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dtos/create-role.dto';
import { Role } from './entities/roles.entity';
import { UpdateRoleDto } from './dtos/update-role.dto';
import { UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async findAll() {
    return this.rolesService.findAll();
  }

  @Get('one')
  async findOne(@Query('user_id') user_id: string): Promise<Role> {
    return this.rolesService.findOne(user_id);
  }

  @Post()
  async create(@Body() payload: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(payload);
  }

  @Patch('update')
  async update(
    @Body() payload: UpdateRoleDto,
    @Query('role_id') role_id: string,
  ): Promise<UpdateResult> {
    return this.rolesService.update(role_id, payload);
  }
}
