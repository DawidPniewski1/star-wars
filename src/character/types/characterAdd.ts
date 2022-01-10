import { Episode } from './../../episode/episode.entity';
import { IEpisode } from '../../episode/types/iEpisode';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { ICharacter } from './iCharacter';
import { ApiProperty } from '@nestjs/swagger';
import { IPlanet } from '../../planet/types/iPlanet';
import { Planet } from '../../planet/planet.entity';
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
