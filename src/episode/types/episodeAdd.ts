import { IEpisode } from '../../episode/types/iEpisode';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EpisodeAdd implements Omit<IEpisode, 'id' | 'characters'> {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({ type: String })
  name: string;
}
