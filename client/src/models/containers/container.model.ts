import { InferType, date, object, string } from "yup";

export const CONTAINER_MODEL = object({
  id: string().required(),
  name: string().required(),
  description: string().nullable(),
  ownerId: string().required(),

  createdAt: date().required(),
  updatedAt: date().required(),
});

export type Container = InferType<typeof CONTAINER_MODEL>;
