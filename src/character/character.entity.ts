import { Planet } from './../planet/planet.entity';
import { IPlanet } from 'src/planet/types/iPlanet';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ICharacter } from './types/iCharacter';
import { IEpisode } from 'src/episode/types/iEpisode';
import { Episode } from 'src/episode/episode.entity';

@Entity()
export class Character implements ICharacter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Planet, { cascade: false })
  planet: IPlanet;

  @ManyToMany(() => Episode, { cascade: false })
  @JoinTable({ name: 'character-episodes' })
  episodes: IEpisode[];
}
