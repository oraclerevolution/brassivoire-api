import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CompteursService } from './compteurs.service';
import { CreateCompteurDto } from './dto/create-compteur.dto';
import { UpdateCompteurDto } from './dto/update-compteur.dto';
import { ApiTags } from '@nestjs/swagger';
import { FullAuthGuard } from 'src/full-auth-guard/full-auth-guard.guard';
import { FullAdminAuthGuard } from 'src/full-admin-auth-guard/full-admin-auth-guard.guard';

@ApiTags('Compteurs')
@UseGuards(FullAuthGuard)
@UseGuards(FullAdminAuthGuard)
@Controller('compteurs')
export class CompteursController {
  constructor(private readonly compteursService: CompteursService) {}

  @Post()
  create(@Body() createCompteurDto: CreateCompteurDto) {
    return this.compteursService.create(createCompteurDto);
  }

  @Get()
  findAll() {
    return this.compteursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compteursService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompteurDto: UpdateCompteurDto,
  ) {
    return this.compteursService.update(id, updateCompteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compteursService.remove(id);
  }
}
