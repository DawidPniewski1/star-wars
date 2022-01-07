import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Episode } from 'src/episode/episode.entity';
import { IEpisode } from 'src/episode/types/iEpisode';
import { Planet } from 'src/planet/planet.entity';
import { IPlanet } from 'src/planet/types/iPlanet';
import { ICharacter } from './iCharacter';

export class CharacterEdit implements Omit<ICharacter, 'id'> {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @ApiProperty({ type: () => Planet })
  planet: IPlanet;

  @ApiProperty({ type: [Episode] })
  episodes: IEpisode[];

  id: string;
}
