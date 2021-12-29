import { IsNotEmpty, MaxLength } from 'class-validator';
import { IPlanet } from './iPlanet';

export class PlanetAdd implements Omit<IPlanet, 'id' | 'characters'> {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
