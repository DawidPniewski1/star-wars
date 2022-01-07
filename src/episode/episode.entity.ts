import { IEpisode } from './types/iEpisode';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ICharacter } from 'src/character/types/iCharacter';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Episode implements IEpisode {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ unique: true })
  name: string;

  characters: ICharacter[];
}
