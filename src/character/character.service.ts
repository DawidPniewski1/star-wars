import { Injectable } from '@nestjs/common';

@Injectable()
export class CharacterService {
  async test() {
    return 'test';
  }
}
