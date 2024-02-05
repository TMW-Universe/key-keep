import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ContainersService } from './containers.service';
import { UserId } from '@tmw-universe/tmw-universe-nestjs-auth-utils';
import { uuid } from '@tmw-universe/tmw-universe-types';
import {
  DataFetchEntryDTO,
  DataFetchParser,
} from 'data-fetch-manager-entry-service';
import { CONTAINER_DMD } from '../../database/model-definitions/container.model-definition';
import { Container } from '@prisma/client';
import { CreateContainerDTO } from '../../dtos/containers/create-container.dto';

@Controller('containers')
export class ContainersController {
  constructor(private readonly containersService: ContainersService) {}

  @Get()
  async getMyContainers(
    @Query() dataEntry: DataFetchEntryDTO,
    @UserId() userId: uuid,
  ) {
    return await this.containersService.getContainersListByUser(
      userId,
      new DataFetchParser<Container>(dataEntry, CONTAINER_DMD).parse(),
    );
  }

  @Post()
  async createContainer(
    @UserId() userId: uuid,
    @Body() body: CreateContainerDTO,
  ) {
    return await this.containersService.createContainer(userId, body);
  }
}