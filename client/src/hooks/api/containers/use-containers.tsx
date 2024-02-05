import { useManagedFetching } from "react-data-fetch-manager";
import { ENV } from "../../../constants/env.constants";
import { CONTAINER_MODEL } from "../../../models/containers/container.model";

export function useContainers() {
  return useManagedFetching({
    fetchOptions: {
      url: `${ENV.API_HOST}/containers`,
    },
    schema: CONTAINER_MODEL,
  });
}
