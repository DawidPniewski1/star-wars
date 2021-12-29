import { EpisodeEdit } from './types/episodeEdit';
import { EpisodeAdd } from './types/episodeAdd';
import { getRepository, Not } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { Episode } from './episode.entity';

@Injectable()
export class EpisodeUtils {
  async isEpisodeNameUniqueAdd(add: EpisodeAdd) {
    if ((await getRepository(Episode).find({ name: add.name })).length > 0)
      throw new HttpException("episode name isn't unique", 400);
  }

  async isEpisodeNameUniqueEdit(id: string, edit: EpisodeEdit) {
    if (
      (
        await getRepository(Episode).find({
          where: { name: edit.name, id: Not(id) },
        })
      ).length > 0
    )
      throw new HttpException("episode name isn't unique", 400);
  }
}
