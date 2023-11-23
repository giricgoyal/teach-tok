import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const transport = axios.create();

type FetchDataOptions = {
  method?: string;
  data?: any;
  params?: any;
};

type FetchDataResponse<T> = Promise<T>;

export async function fetchData<T>(
  url: string,
  options?: FetchDataOptions
): FetchDataResponse<T> {
  try {
    const axiosOptions: AxiosRequestConfig = {
      method: options?.method || "GET",
      data: options?.data,
      params: options?.params,
    };

    const result: AxiosResponse<T> = await transport(url, axiosOptions);

    return result.data;
  } catch (error) {
    throw error;
  }
}
