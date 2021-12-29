import { ICharacter } from './../../character/types/iCharacter';
export interface IPlanet {
  id: string;
  name: string;
  characters: ICharacter[];
}
