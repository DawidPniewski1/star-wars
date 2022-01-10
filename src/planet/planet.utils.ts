import { PlanetEdit } from './types/planetEdit';
import { PlanetAdd } from './types/PlanetAdd';
import { Not, Repository, getRepository } from 'typeorm';
import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from './planet.entity';

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
