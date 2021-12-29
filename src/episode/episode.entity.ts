import { IEpisode } from './types/iEpisode';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ICharacter } from 'src/character/types/iCharacter';

@Entity()
export class Episode implements IEpisode {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;

  characters: ICharacter[];
}
