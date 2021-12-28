import { CharacterService } from './character.service';
import { Controller, Get } from '@nestjs/common';

@Controller('character')
export class CharacterController {
  constructor(private characterService: CharacterService) {}
  @Get()
  async get() {
    return await this.characterService.test();
  }
}
