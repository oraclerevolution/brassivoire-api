import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { PeriodService } from './period.service';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Period')
// // @UseGuards(FullAuthGuard)
// // @UseGuards(FullAdminAuthGuard)
@Controller('period')
export class PeriodController {
  constructor(private readonly periodService: PeriodService) {}

  @Post()
  create(@Body() createPeriodDto: CreatePeriodDto) {
    return this.periodService.create(createPeriodDto);
  }

  @Get()
  findAll() {
    return this.periodService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.periodService.findOne(id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() updatePeriodDto: UpdatePeriodDto) {
    return this.periodService.update(id, updatePeriodDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.periodService.remove(id);
  }
}
