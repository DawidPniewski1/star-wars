import { PlanetUtils } from './../planet.utils';
import { PlanetService } from './../planet.service';
import { Test } from '@nestjs/testing';
import { PlanetController } from './../planer.controller';
import { Any } from 'typeorm';
import { Planet } from '../planet.entity';
import { response } from 'express';

describe('Character Controller', () => {
  let planetService: PlanetService;
  let planetUtils: PlanetUtils;
  let planetController: PlanetController;

  beforeEach(async () => {
    const modulePlanet = await Test.createTestingModule({
      controllers: [PlanetController],
      providers: [PlanetService, PlanetUtils],
    }).compile();

    planetService = modulePlanet.get<PlanetService>(PlanetService);
    planetUtils = modulePlanet.get<PlanetUtils>(PlanetUtils);
    planetController = modulePlanet.get<PlanetController>(PlanetController);
  });

  describe('findAll', () => {
    it('should return max 10 first planets', async () => {
      let result: Planet[];

      jest
        .spyOn(planetService, 'findAll')
        .mockImplementation(async () => await result);
      expect(await planetService.findAll({ size: 10, page: 1 })).toBe(result);
    });
  });

  describe('addPlanet', () => {
    it('should return added planet', async () => {
      let result: Planet;

      jest
        .spyOn(planetService, 'addPlanet')
        .mockImplementation(async () => await result);

      expect(await planetService.addPlanet({ name: 'test' })).toBe(result);
    });
  });

  describe('edit', () => {
    it('should return void', async () => {
      let result: void;

      jest
        .spyOn(planetService, 'editPlanet')
        .mockImplementation(async () => await result);

      expect(await planetService.editPlanet('swef', { name: 'planet' })).toBe(
        result,
      );
    });
  });

  describe('delete planet', () => {
    it('should return void', async () => {
      let result: void;

      jest
        .spyOn(planetService, 'deletePlanet')
        .mockImplementation(async () => await result);

      expect(await planetService.deletePlanet('swef')).toBe(result);
    });
  });
});
