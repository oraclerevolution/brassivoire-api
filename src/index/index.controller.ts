import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { IndexService } from './index.service';
import { CreateIndexDto } from './dto/create-index.dto';
import { UpdateIndexDto } from './dto/update-index.dto';
import { ApiTags } from '@nestjs/swagger';
import { FullAuthGuard } from 'src/full-auth-guard/full-auth-guard.guard';
import { FullAdminAuthGuard } from 'src/full-admin-auth-guard/full-admin-auth-guard.guard';

@ApiTags('Index')
// @UseGuards(FullAuthGuard)
// @UseGuards(FullAdminAuthGuard)
@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Post()
  create(@Body() createIndexDto: CreateIndexDto) {
    return this.indexService.create(createIndexDto);
  }

  @Get()
  findAll() {
    return this.indexService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.indexService.findOne(id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() updateIndexDto: UpdateIndexDto) {
    return this.indexService.update(id, updateIndexDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.indexService.remove(id);
  }
}
