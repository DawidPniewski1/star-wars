import { EpisodeEdit } from './types/episodeEdit';
import { getRepository } from 'typeorm';
import { EpisodeUtils } from './episode.utils';
import { EpisodeAdd } from './types/episodeAdd';
import { HttpException, Injectable } from '@nestjs/common';
import { Episode } from './episode.entity';
import { IPagination } from '../types/pagination';

@Injectable()
export class EpisodeService {
  constructor(private episodeUtils: EpisodeUtils) {}
  async addEpisode(add: EpisodeAdd): Promise<Episode> {
    await this.episodeUtils.isEpisodeNameUniqueAdd(add);
    return await getRepository(Episode).save(add);
  }

  async editEpisode(id: string, edit: EpisodeEdit) {
    await this.episodeUtils.isEpisodeNameUniqueEdit(id, edit);
    getRepository(Episode).update(id, edit);
  }

  async deleteEpisode(id: string) {
    if ((await getRepository(Episode).findOne(id)) === undefined)
      throw new HttpException('Episode not exist', 404);
    getRepository(Episode).delete(id);
  }

  async findAll(pagination: IPagination): Promise<Episode[]> {
    return getRepository(Episode).find({
      take: pagination.size,
      skip: pagination.size * (pagination.page - 1),
    });
  }
}
