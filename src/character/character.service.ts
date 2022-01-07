import { FilteredCharacter } from './types/filteredCharacter';
import { Planet } from 'src/planet/planet.entity';
import { Episode } from 'src/episode/episode.entity';
import { CharacterEdit } from './types/characterEdit';
import { createQueryBuilder, getConnection, getRepository, Not } from 'typeorm';
import { CharacterAdd } from './types/characterAdd';
import { Injectable, HttpException } from '@nestjs/common';
import { Character } from './character.entity';
import { CharacterUtils } from './characterUtils';
import { IPagination } from 'src/types/pagination';
import { skip } from 'rxjs';

@Injectable()
export class CharacterService {
  constructor(private characterUtils: CharacterUtils) {}
  async addCharacter(add: CharacterAdd): Promise<Character> {
    if (add.episodes === undefined)
      throw new HttpException('min 1 episode needed', 400);

    await this.characterUtils.isCharacterNameUniqueAdd(add);

    if (add.planet !== undefined)
      await this.characterUtils.isPlanetCorrect(add);
    if (add.episodes !== undefined)
      await this.characterUtils.isEpisodesCorrect(add);

    return await getRepository(Character).save(add);
  }

  async editCharacter(id: string, edit: CharacterEdit) {
    if (edit.episodes === undefined)
      throw new HttpException('min 1 episode needed', 400);

    await this.characterUtils.isCharacterNameUniqueEdit(id, edit);

    if (edit.planet !== undefined)
      await this.characterUtils.isPlanetCorrect(edit);
    if (edit.episodes !== undefined)
      await this.characterUtils.isEpisodesCorrect(edit);

    const actual = await getRepository(Character).findOne(id);

    edit.id = actual.id;
    if (edit.planet === undefined) edit.planet = null;
    await getRepository(Character).save(edit);

    return await getRepository(Character).findOne({
      where: { id },
      relations: ['planet', 'episodes'],
    });
  }

  async deleteCharacter(id: string) {
    if ((await getRepository(Character).findOne(id)) === undefined)
      throw new HttpException('CHaracter not exist', 404);
    getRepository(Character).delete(id);
  }

  async getAllCharacters(
    pagination: IPagination,
  ): Promise<FilteredCharacter[]> {
    console.log(' ----- DANE ----- heniu ', pagination.size);
    if (pagination.size === undefined || '') pagination.size = 20;
    if (pagination.page === undefined || '') pagination.page = 1;

    const size = pagination.size;
    const skip = pagination.size * (pagination.page - 1);

    const characters = await getConnection()
      .createQueryBuilder(Character, 'char')
      .innerJoin('char.planet', 'p', 'p.id=char.planet')
      .innerJoin('char.episodes', 'e')
      .take(size)
      .skip(skip)
      .addSelect('p.name')
      .addSelect('e.name')
      .getMany();

    return characters.map((el) => this.characterUtils.filterCharacter(el));
  }
}
