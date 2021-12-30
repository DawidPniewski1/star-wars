import { CharacterController } from './character.controller';
import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterUtils } from './characterUtils';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService, CharacterUtils],
})
export class CharacterModule {}
