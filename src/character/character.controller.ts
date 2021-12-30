import { CharacterEdit } from './types/characterEdit';
import { CharacterAdd } from './types/characterAdd';
import { CharacterService } from './character.service';
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
import { Character } from './character.entity';
import { IPagination } from 'src/types/pagination';
import { FilteredCharacter } from './types/filteredCharacter';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';

@ApiTags('character')
@Controller('character')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Post()
  async addCharacter(@Body() add: CharacterAdd): Promise<Character> {
    return await this.characterService.addCharacter(add);
  }

  @Put(':idCharacter')
  async editCharacter(
    @Body() edit: CharacterEdit,
    @Param('idCharacter') id: string,
  ) {
    return await this.characterService.editCharacter(id, edit);
  }

  @Delete(':idCharacter')
  async deleteCharacter(@Param('idCharacter') id: string) {
    return await this.characterService.deleteCharacter(id);
  }

  @Get()
  async getAll(@Query() pagination: IPagination): Promise<FilteredCharacter[]> {
    return await this.characterService.getAllCharacters(pagination);
  }
}
