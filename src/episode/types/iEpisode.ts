import { ICharacter } from '../../character/types/iCharacter';
export interface IEpisode {
  id: string;
  name: string;

  characters: ICharacter[];
}
