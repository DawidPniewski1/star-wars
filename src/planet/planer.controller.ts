import { IPagination } from './../types/pagination';
import { PlanetEdit } from './types/planetEdit';
import { PlanetService } from './planet.service';
import { PlanetAdd } from './types/PlanetAdd';
import { Planet } from './planet.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('planet')
export class PlanetController {
  constructor(private planetService: PlanetService) {}

  @Post('add')
  async addPlanet(@Body() add: PlanetAdd): Promise<Planet> {
    return await this.planetService.addPlanet(add);
  }

  @Put('/edit/:planetId')
  async editPlanet(@Param('planetId') id: string, @Body() edit: PlanetEdit) {
    return await this.planetService.editPlanet(id, edit);
  }

  @Delete('delete/:planetId')
  async deletePlanet(@Param('planetId') id: string) {
    await this.planetService.deletePlanet(id);
  }

  @Get()
  async getAll(@Query() pagination: IPagination): Promise<Planet[]> {
    return await this.planetService.findAll(pagination);
  }
}
