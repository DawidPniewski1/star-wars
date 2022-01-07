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
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('episode')
@Controller('episode')
export class EpisodeController {
  constructor(private episodeService: EpisodeService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Add a episode' })
  async addPlanet(@Body() add: EpisodeAdd): Promise<Episode> {
    return await this.episodeService.addEpisode(add);
  }

  @Put(':episodeId')
  @ApiCreatedResponse({ description: 'edit a episode' })
  async editPlanet(@Param('episodeId') id: string, @Body() edit: EpisodeEdit) {
    return await this.episodeService.editEpisode(id, edit);
  }

  @Delete(':planetId')
  @ApiCreatedResponse({ description: 'delete a episode' })
  async deletePlanet(@Param('planetId') id: string) {
    await this.episodeService.deleteEpisode(id);
  }

  @Get()
  @ApiCreatedResponse({ description: 'List all episodes' })
  async getAll(@Query() pagination: IPagination): Promise<Episode[]> {
    return await this.episodeService.findAll(pagination);
  }
}
