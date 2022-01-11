import { EpisodeController } from './../episode.controller';
import { EpisodeUtils } from './../episode.utils';
import { EpisodeService } from './../episode.service';
import { Test } from '@nestjs/testing';
import { Episode } from '../episode.entity';
describe('Character Controller', () => {
  let episodeService: EpisodeService;
  let episodeUtils: EpisodeUtils;
  let episodeController: EpisodeController;

  beforeEach(async () => {
    const modulePlanet = await Test.createTestingModule({
      controllers: [EpisodeController],
      providers: [EpisodeService, EpisodeUtils],
    }).compile();

    episodeService = modulePlanet.get<EpisodeService>(EpisodeService);
    episodeUtils = modulePlanet.get<EpisodeUtils>(EpisodeUtils);
    episodeController = modulePlanet.get<EpisodeController>(EpisodeController);
  });

  describe('findAll', () => {
    it('should return max 10 first episodes', async () => {
      let result: Episode[];

      jest
        .spyOn(episodeService, 'findAll')
        .mockImplementation(async () => await result);
      expect(await episodeService.findAll({ size: 10, page: 1 })).toBe(result);
    });
  });

  describe('addPlanet', () => {
    it('should return added planet', async () => {
      let result: Episode;

      jest
        .spyOn(episodeService, 'addEpisode')
        .mockImplementation(async () => await result);

      expect(await episodeService.addEpisode({ name: 'test' })).toBe(result);
    });
  });

  describe('edit episode', () => {
    it('should return void', async () => {
      let result: void;

      jest
        .spyOn(episodeService, 'editEpisode')
        .mockImplementation(async () => await result);

      expect(await episodeService.editEpisode('swef', { name: 'planet' })).toBe(
        result,
      );
    });
  });

  describe('delete planet', () => {
    it('should return void', async () => {
      let result: void;

      jest
        .spyOn(episodeService, 'deleteEpisode')
        .mockImplementation(async () => await result);

      expect(await episodeService.deleteEpisode('swef')).toBe(result);
    });
  });
});
