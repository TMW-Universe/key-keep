import { Prisma } from '@prisma/client';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateContainerDTO
  implements Omit<Prisma.ContainerUncheckedCreateInput, 'ownerId'>
{
  @MaxLength(32)
  @MinLength(2)
  @IsNotEmpty()
  @IsString()
  name: string;

  @MaxLength(10000)
  @IsString()
  @IsOptional()
  description?: string;

  @MaxLength(128)
  @MinLength(10)
  @IsString()
  masterPassword: string;
}
