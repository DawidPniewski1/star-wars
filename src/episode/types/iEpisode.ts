import { ICharacter } from 'src/character/types/iCharacter';
export interface IEpisode {
  id: string;
  name: string;

  characters: ICharacter[];
}
