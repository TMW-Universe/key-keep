import { Injectable } from '@nestjs/common';
import { Container } from '@prisma/client';
import { uuid } from '@tmw-universe/tmw-universe-types';
import { DataFetchEntryObject } from 'data-fetch-manager-entry-service';
import { ContainersRepository } from '../../database/repositories/containers.repository';

@Injectable()
export class ContainersService {
  constructor(private readonly containersRepository: ContainersRepository) {}

  async getContainersListByUser(
    userId: uuid,
    dataEntryObject: DataFetchEntryObject<Container>,
  ) {
    return await this.containersRepository.findListByOwnerId(
      userId,
      dataEntryObject,
    );
  }
}
