import { Episode } from 'src/episode/episode.entity';
import { Planet } from 'src/planet/planet.entity';
export interface FilteredCharacter {
  name: string;
  planet: Planet;
  episodes: Episode[];
}
