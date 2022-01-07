import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { IPlanet } from './iPlanet';

export class PlanetEdit implements Omit<IPlanet, 'id' | 'characters'> {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({ type: String, description: 'Planet name for edit' })
  name: string;
}
