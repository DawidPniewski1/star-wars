import { PlanetAdd } from './../../planet/types/PlanetAdd';
import { EpisodeAdd } from './../../episode/types/episodeAdd';
import { Episode } from './../../episode/episode.entity';
import { IEpisode } from 'src/episode/types/iEpisode';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { ICharacter } from './iCharacter';
import { ApiProperty } from '@nestjs/swagger';
import { Planet } from 'src/planet/planet.entity';
import { Ip } from '@nestjs/common';
import { IPlanet } from 'src/planet/types/iPlanet';
import { type } from 'os';

export class CharacterAdd implements Omit<ICharacter, 'id'> {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  name: string;

  @ApiProperty({ type: () => Planet })
  planet: IPlanet;

  @ApiProperty({ type: [Episode] })
  episodes: IEpisode[];
}
