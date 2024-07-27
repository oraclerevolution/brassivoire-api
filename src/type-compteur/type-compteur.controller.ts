import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { TypeCompteurService } from './type-compteur.service';
import { CreateTypeCompteurDto } from './dto/create-type-compteur.dto';
import { UpdateTypeCompteurDto } from './dto/update-type-compteur.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Counter-type')
@Controller('type-compteur')
export class TypeCompteurController {
  constructor(private readonly typeCompteurService: TypeCompteurService) {}

  @Post()
  create(@Body() createTypeCompteurDto: CreateTypeCompteurDto) {
    return this.typeCompteurService.create(createTypeCompteurDto);
  }

  @Get()
  findAll() {
    return this.typeCompteurService.findAll();
  }

  @Get('')
  findOne(@Query('id') id: string) {
    return this.typeCompteurService.findOne(id);
  }

  @Patch('')
  update(
    @Query('id') id: string,
    @Body() updateTypeCompteurDto: UpdateTypeCompteurDto,
  ) {
    return this.typeCompteurService.update(id, updateTypeCompteurDto);
  }

  @Delete('')
  remove(@Query('id') id: string) {
    return this.typeCompteurService.remove(id);
  }
}
