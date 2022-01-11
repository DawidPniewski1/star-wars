import { IPagination } from './../types/pagination';
import { PlanetEdit } from './types/planetEdit';
import { PlanetUtils } from './planet.utils';
import { PlanetAdd } from './types/PlanetAdd';
import { HttpException, Injectable } from '@nestjs/common';

import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from './planet.entity';

@Injectable()
export class PlanetService {
  constructor(private planetUtils: PlanetUtils) {}

  async test() {
    return 'test';
  }

  async addPlanet(add: PlanetAdd): Promise<Planet> {
    await this.planetUtils.isPlanetNameUniqueAdd(add);

    return await getRepository(Planet).save(add);
  }

  async editPlanet(id: string, edit: PlanetEdit) {
    if ((await getRepository(Planet).findOne(id)) === undefined)
      throw new HttpException('Wrong planet id', 404);
    await this.planetUtils.isPlanetNameUniqueEdit(id, edit);
    getRepository(Planet).update(id, edit);
  }

  async deletePlanet(id: string) {
    if ((await getRepository(Planet).findOne(id)) === undefined)
      throw new HttpException('Planet not exist', 404);
    getRepository(Planet).delete(id);
  }

  async findAll(pagination: IPagination): Promise<Planet[]> {
    return getRepository(Planet).find({
      take: pagination.size,
      skip: pagination.size * (pagination.page - 1),
    });
  }
}
