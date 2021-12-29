import { IEpisode } from '../../episode/types/iEpisode';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class EpisodeAdd implements Omit<IEpisode, 'id' | 'characters'> {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
