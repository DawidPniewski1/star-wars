import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterModule } from './character/character.module';
import { EpisodeModule } from './episode/episode.module';
import { PlanetModule } from './planet/planet.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CharacterModule, EpisodeModule, PlanetModule],
})
export class AppModule {}
