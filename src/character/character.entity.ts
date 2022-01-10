import { IPlanet } from '../planet/types/iPlanet';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ICharacter } from './types/iCharacter';
import { IEpisode } from '../episode/types/iEpisode';
import { Episode } from '../episode/episode.entity';
import { Planet } from '../planet/planet.entity';

@Entity()
export class Character implements ICharacter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Planet, { cascade: false })
  planet: IPlanet;

  @ManyToMany(() => Episode, { cascade: false })
  @JoinTable({ name: 'character-episodes' })
  episodes: IEpisode[];
}
