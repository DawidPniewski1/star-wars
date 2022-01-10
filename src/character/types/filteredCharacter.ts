import { Planet } from '../../planet/planet.entity';
import { Episode } from '../../episode/episode.entity';
export interface FilteredCharacter {
  name: string;
  planet: Planet;
  episodes: Episode[];
}
