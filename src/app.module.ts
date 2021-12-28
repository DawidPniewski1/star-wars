import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CharacterModule],
})
export class AppModule {}
