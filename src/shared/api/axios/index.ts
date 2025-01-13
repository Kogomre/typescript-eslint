import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';

import { API_URL } from 'shared/config';

export const instance: AxiosInstance = axios.create({
  timeout: 30000,
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const api = {
  get: <T>(url: string, params?: object, config?: AxiosRequestConfig): AxiosPromise<T> =>
    instance.get<T>(url, { params, ...config }),
  post: <T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> =>
    instance.post<T>(url, data, config),
  put: <T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> =>
    instance.put<T>(url, data, config),
  patch: <T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> =>
    instance.patch<T>(url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> =>
    instance.delete<T>(url, config),
  head: <T>(url: string, data?: object): AxiosPromise<T> => instance.head<T>(url, data),
};
