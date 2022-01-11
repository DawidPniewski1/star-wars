import { Character } from 'src/character/character.entity';
import { CharacterController } from './../character.controller';
import { CharacterService } from '../character.service';
import { CharacterUtils } from '../characterUtils';
import { Test } from '@nestjs/testing';

describe('Character Controller', () => {
  let characterService: CharacterService;
  let characterUtils: CharacterUtils;
  let characterController: CharacterController;

  beforeEach(async () => {
    const modulePlanet = await Test.createTestingModule({
      controllers: [CharacterController],
      providers: [CharacterService, CharacterUtils],
    }).compile();

    characterService = modulePlanet.get<CharacterService>(CharacterService);
    characterUtils = modulePlanet.get<CharacterUtils>(CharacterUtils);
    characterController =
      modulePlanet.get<CharacterController>(CharacterController);
  });

  describe('get All Characters', () => {
    it('should return max 10 first characters', async () => {
      let result: Character[];

      jest
        .spyOn(characterService, 'getAllCharacters')
        .mockImplementation(async () => await result);
      expect(
        await characterService.getAllCharacters({ size: 10, page: 1 }),
      ).toBe(result);
    });
  });

  describe('addCharacter', () => {
    it('should return added character', async () => {
      let result: Character;

      jest
        .spyOn(characterService, 'addCharacter')
        .mockImplementation(async () => await result);

      expect(
        await characterService.addCharacter({ name: 'test character' }),
      ).toBe(result);
    });
  });

  describe('edit', () => {
    it('should return void', async () => {
      let result: Character;

      jest
        .spyOn(characterService, 'editCharacter')
        .mockImplementation(async () => await result);

      expect(
        await characterService.editCharacter('swef', {
          name: 'sfd',
        }),
      ).toBe(result);
    });
  });

  describe('delete character', () => {
    it('should return void', async () => {
      let result: void;

      jest
        .spyOn(characterService, 'deleteCharacter')
        .mockImplementation(async () => await result);

      expect(await characterService.deleteCharacter('swef')).toBe(result);
    });
  });
});
