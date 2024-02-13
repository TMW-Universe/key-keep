import { Container } from '@prisma/client';
import {
  DataModelDefinition,
  DataType,
} from 'data-fetch-manager-entry-service';

export const CONTAINER_DMD = new DataModelDefinition<
  Omit<Container, 'masterPassword'>
>({
  id: {
    dataType: DataType.STRING,
  },
  name: {
    dataType: DataType.STRING,
    isSearchable: true,
  },
  description: {
    dataType: DataType.STRING,
    isSearchable: true,
  },
  ownerId: {
    dataType: DataType.STRING,
  },

  // Timestamps
  createdAt: {
    dataType: DataType.DATE,
  },
  updatedAt: {
    dataType: DataType.DATE,
  },
});
