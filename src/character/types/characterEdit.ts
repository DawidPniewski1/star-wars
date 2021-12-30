import { IsNotEmpty, MaxLength } from 'class-validator';
import { IEpisode } from 'src/episode/types/iEpisode';
import { IPlanet } from 'src/planet/types/iPlanet';
import { ICharacter } from './iCharacter';

export class CharacterEdit implements Omit<ICharacter, 'id'> {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  planet: IPlanet;
  episodes: IEpisode[];

  id: string;
}
