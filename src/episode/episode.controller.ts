import { IPagination } from './../types/pagination';
import { EpisodeEdit } from './types/episodeEdit';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { Episode } from './episode.entity';
import { EpisodeAdd } from './types/episodeAdd';

@Controller('episode')
export class EpisodeController {
  constructor(private episodeService: EpisodeService) {}

  @Post()
  async addPlanet(@Body() add: EpisodeAdd): Promise<Episode> {
    return await this.episodeService.addEpisode(add);
  }

  @Put(':episodeId')
  async editPlanet(@Param('episodeId') id: string, @Body() edit: EpisodeEdit) {
    return await this.episodeService.editEpisode(id, edit);
  }

  @Delete(':planetId')
  async deletePlanet(@Param('planetId') id: string) {
    await this.episodeService.deleteEpisode(id);
  }

  @Get()
  async getAll(@Query() pagination: IPagination): Promise<Episode[]> {
    return await this.episodeService.findAll(pagination);
  }
}
