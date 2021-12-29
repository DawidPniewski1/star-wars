import { PlanetEdit } from './types/planetEdit';
import { PlanetAdd } from './types/PlanetAdd';
import { Planet } from './planet.entity';
import { getRepository, Not } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class PlanetUtils {
  async isPlanetNameUniqueAdd(add: PlanetAdd) {
    if ((await getRepository(Planet).find({ name: add.name })).length > 0)
      throw new HttpException("planet name isn't unique", 400);
  }

  async isPlanetNameUniqueEdit(id: string, edit: PlanetEdit) {
    if (
      (
        await getRepository(Planet).find({
          where: { name: edit.name, id: Not(id) },
        })
      ).length > 0
    )
      throw new HttpException("planet name isn't unique", 400);
  }
}
