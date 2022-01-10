import { getRepositoryToken } from '@nestjs/typeorm';
import { Planet } from 'src/planet/planet.entity';
import { PlanetService } from './planet.service';
import { forwardRef, Module } from '@nestjs/common';
import { PlanetController } from './planer.controller';
import { PlanetUtils } from './planet.utils';
import { Repository } from 'typeorm';

@Module({
  controllers: [PlanetController],
  providers: [PlanetService, PlanetUtils],
})
export class PlanetModule {}
