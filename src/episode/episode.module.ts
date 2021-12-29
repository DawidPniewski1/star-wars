import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [EpisodeController],
  providers: [EpisodeService],
})
export class EpisodeModule {}
