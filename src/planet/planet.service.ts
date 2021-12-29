import { IPagination } from './../types/pagination';
import { PlanetEdit } from './types/planetEdit';
import { PlanetUtils } from './planet.utils';
import { PlanetAdd } from './types/PlanetAdd';
import { HttpException, Injectable } from '@nestjs/common';
import { Planet } from './planet.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class PlanetService {
  constructor(private planetUtils: PlanetUtils) {}
  async addPlanet(add: PlanetAdd): Promise<Planet> {
    await this.planetUtils.isPlanetNameUniqueAdd(add);
    return await getRepository(Planet).save(add);
  }

  async editPlanet(id: string, edit: PlanetEdit) {
    await this.planetUtils.isPlanetNameUniqueEdit(id, edit);
    getRepository(Planet).update(id, edit);
  }

  async deletePlanet(id: string) {
    const planet = await getRepository(Planet).findOne(id);
    if (!planet) throw new HttpException('Invalid id', 404);
    getRepository(Planet).delete(id);
  }

  async findAll(pagination: IPagination): Promise<Planet[]> {
    return getRepository(Planet).find({
      take: pagination.size,
      skip: pagination.size * (pagination.page - 1),
    });
  }
}
