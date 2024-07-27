import { Module } from '@nestjs/common';
import { IndexService } from './index.service';
import { IndexController } from './index.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Index } from './entities/index.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Index])],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
