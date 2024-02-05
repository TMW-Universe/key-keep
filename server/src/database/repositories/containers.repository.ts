import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { uuid } from '@tmw-universe/tmw-universe-types';
import { DataFetchEntryObject } from 'data-fetch-manager-entry-service';
import { Container, Prisma } from '@prisma/client';
import { RepositoryOptions } from '../../types/database/repository/repository-options.interface';
import { generateQueryFromDataEntry } from 'data-fetch-manager-prisma-querier';
import { CONTAINER_DMD } from '../model-definitions/container.model-definition';

@Injectable()
export class ContainersRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async findListByOwnerId(
    userId: uuid,
    dataEntryObject: DataFetchEntryObject<Container>,
    options?: RepositoryOptions,
  ) {
    const { query, countQuery } = await generateQueryFromDataEntry(
      dataEntryObject,
      CONTAINER_DMD,
      {
        where: {
          ownerId: userId,
        },
      },
    );

    const rows = await (
      options?.transaction ?? this.databaseService
    ).container.findMany(query);

    const count = await (
      options?.transaction ?? this.databaseService
    ).container.count(countQuery);

    return {
      rows,
      count,
    };
  }

  async create(
    data: Prisma.ContainerUncheckedCreateInput,
    options?: RepositoryOptions,
  ) {
    return await (
      options?.transaction ?? this.databaseService
    ).container.create({
      data,
    });
  }
}
