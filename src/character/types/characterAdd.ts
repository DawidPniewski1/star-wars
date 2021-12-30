import { IEpisode } from 'src/episode/types/iEpisode';
import { IPlanet } from 'src/planet/types/iPlanet';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { ICharacter } from './iCharacter';
import { ApiProperty } from '@nestjs/swagger';
import { Planet } from 'src/planet/planet.entity';

export class CharacterAdd implements Omit<ICharacter, 'id'> {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  name: string;

  @ApiProperty()
  planet: IPlanet;

  @ApiProperty()
  episodes: IEpisode[];
}
