import { Route } from "./router";
import { routes } from "./routes";

const routes_definition: Route[] = [
  {
    path: routes.HOME(),
    loader: () => import("../pages/home.page"),
    allowsOffline: false,
  },
  {
    path: routes.CONTAINERS(),
    loader: () => import("../pages/containers.page"),
    allowsOffline: false,
  },
  {
    path: routes.CONTAINER(":containerId"),
    loader: () => import("../pages/container.page"),
    allowsOffline: false,
  },
];

export default routes_definition;
