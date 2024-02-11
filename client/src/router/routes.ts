import { uuid } from "@tmw-universe/tmw-universe-types";

type Route = (params: never) => string;

export const routes = {
  HOME: () => "/",
  CONTAINERS: () => "/containers",
  CONTAINER: (containerId: uuid) => `/containers/${containerId}`,
} satisfies Record<string, Route>;
