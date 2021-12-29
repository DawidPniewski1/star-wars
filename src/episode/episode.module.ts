import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { Module } from '@nestjs/common';
import { EpisodeUtils } from './episode.utils';

@Module({
  controllers: [EpisodeController],
  providers: [EpisodeService, EpisodeUtils],
})
export class EpisodeModule {}
