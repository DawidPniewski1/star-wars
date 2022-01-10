import { PlanetUtils } from './../planet.utils';
import { PlanetService } from './../planet.service';
import { Test } from '@nestjs/testing';
import { PlanetController } from './../planer.controller';

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
    it('should return an array of cats', async () => {
      let result = 'test';
      jest
        .spyOn(planetService, 'test')
        .mockImplementation(async () => await result);

      expect(await planetService.test()).toBe(result);
    });
  });
});
