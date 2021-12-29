import { IPlanet } from './types/iPlanet';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ICharacter } from 'src/character/types/iCharacter';
import { Character } from 'src/character/character.entity';

@Entity()
export class Planet implements IPlanet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Character, (character) => character.planet, {
    cascade: false,
  })
  characters: ICharacter[];
}
