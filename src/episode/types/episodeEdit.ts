import { IEpisode } from '../../episode/types/iEpisode';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class EpisodeEdit implements Omit<IEpisode, 'id' | 'characters'> {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
