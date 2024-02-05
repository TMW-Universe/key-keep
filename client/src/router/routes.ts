type Route = (params: never) => string;

export const routes = {
  HOME: () => "/",
  CONTAINERS: () => "/containers",
} satisfies Record<string, Route>;
