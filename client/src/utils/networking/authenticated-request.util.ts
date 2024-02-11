import axios, { AxiosRequestConfig } from "axios";

type AuthenticatedOptions = {
  accessToken: string;
};

export const authenticatedRequest = async <T = unknown, K = unknown>(
  config: AxiosRequestConfig<K>,
  options: AuthenticatedOptions
) =>
  await axios.request<T>({
    ...config,
    headers: {
      authorization: `Bearer ${options.accessToken}`,
      ...config.headers,
    },
  });
