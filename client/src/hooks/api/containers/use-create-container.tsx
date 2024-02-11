import { useMutation } from "@tanstack/react-query";
import { useAuthenticatedRequest } from "../../network/use-authenticated-request";
import { ENV } from "../../../constants/env.constants";
import { CreateContainerModel } from "../../../models/containers/create-container.model";

export function useCreateContainer() {
  const { request } = useAuthenticatedRequest();

  return useMutation({
    mutationKey: ["containers", "create"],
    mutationFn: async (data: CreateContainerModel) =>
      await request({
        url: `${ENV.API_HOST}/containers`,
        method: "post",
        data,
      }),
  });
}
