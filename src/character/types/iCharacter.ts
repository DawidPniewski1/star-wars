import { IEpisode } from './../../episode/types/iEpisode';
import { IPlanet } from './../../planet/types/iPlanet';
export interface ICharacter {
  id: string;
  name: string;

  planet?: IPlanet;
  episodes?: IEpisode[];
}
