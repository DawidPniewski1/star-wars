import { PlanetService } from './planet.service';
import { Module } from '@nestjs/common';
import { PlanetController } from './planer.controller';
import { PlanetUtils } from './planet.utils';

@Module({
  controllers: [PlanetController],
  providers: [PlanetService, PlanetUtils],
})
export class PlanetModule {}
