import { IPagination } from './../types/pagination';
import { PlanetEdit } from './types/planetEdit';
import { PlanetService } from './planet.service';
import { PlanetAdd } from './types/PlanetAdd';
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
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Planet } from './planet.entity';

@ApiTags('planet')
@Controller('planet')
export class PlanetController {
  constructor(private planetService: PlanetService) {}

  @Get('test')
  async test(): Promise<String> {
    return 'test';
  }

  @Post()
  @ApiBody({ type: PlanetAdd })
  @ApiCreatedResponse({ description: 'Add a planet' })
  async addPlanet(@Body() add: PlanetAdd): Promise<Planet> {
    return await this.planetService.addPlanet(add);
  }

  @Put(':planetId')
  @ApiCreatedResponse({ description: 'edit planet', type: PlanetEdit })
  async editPlanet(@Param('planetId') id: string, @Body() edit: PlanetEdit) {
    return await this.planetService.editPlanet(id, edit);
  }

  @Delete(':planetId')
  @ApiCreatedResponse({ description: 'delete planet' })
  async deletePlanet(@Param('planetId') id: string) {
    await this.planetService.deletePlanet(id);
  }

  @Get()
  @ApiCreatedResponse({ description: 'List all planets' })
  async getAll(@Query() pagination: IPagination): Promise<Planet[]> {
    return await this.planetService.findAll(pagination);
  }
}
