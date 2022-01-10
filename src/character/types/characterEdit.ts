import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Planet } from '../../planet/planet.entity';
import { Episode } from '../../episode/episode.entity';
import { IEpisode } from '../../episode/types/iEpisode';

import { IPlanet } from '../../planet/types/iPlanet';
import { ICharacter } from './iCharacter';

export class CharacterEdit implements Omit<ICharacter, 'id'> {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  name: string;

  @ApiProperty({ type: () => Planet })
  planet: IPlanet;

  @ApiProperty({ type: [Episode] })
  episodes: IEpisode[];

  id: string;
}
