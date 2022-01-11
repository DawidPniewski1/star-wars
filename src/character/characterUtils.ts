import { Character } from '../character/character.entity';
import { Episode } from '../episode/episode.entity';
import { CharacterAdd } from './types/CharacterAdd';
import { HttpException, Injectable } from '@nestjs/common';
import { getRepository, Not } from 'typeorm';
import { CharacterEdit } from './types/characterEdit';
import { Planet } from '../planet/planet.entity';

@Injectable()
export class CharacterUtils {
  async isCharacterNameUniqueAdd(add: CharacterAdd) {
    if ((await getRepository(Character).find({ name: add.name })).length > 0)
      throw new HttpException("episode name isn't unique", 400);
  }

  async isPlanetCorrect(add: CharacterAdd) {
    if ((await getRepository(Planet).find({ id: add.planet.id })).length === 0)
      throw new HttpException("planet doesn't exist ", 400);
  }

  async isEpisodesCorrect(add: CharacterAdd) {
    for (const episode of add.episodes) {
      if (
        (await (
          await getRepository(Episode).find({ id: episode.id })
        ).length) === 0
      )
        throw new HttpException("episode doesn't exist", 400);
    }
  }

  async isCharacterNameUniqueEdit(id: string, add: CharacterEdit) {
    if (
      (await getRepository(Character).find({ name: add.name, id: Not(id) }))
        .length > 0
    )
      throw new HttpException("character name isn't unique", 400);
  }

  filterCharacter = (c: Character) => ({
    name: c.name,
    planet: c.planet,
    episodes: c.episodes,
  });
}
