import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { env } from '@/config/env';
import type { ApiErrorResponse, ApiResult } from '@/types';

interface ApiRequestOptions extends Omit<AxiosRequestConfig, 'params'> {
  params?: Record<string, string | number | boolean>;
  requiresAuth?: boolean;
}

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        // Handle 401 unauthorized errors
        if (error.response?.status === 401 && typeof window !== 'undefined') {
        }
        return Promise.reject(error);
      },
    );
  }

  private async getAuthToken(): Promise<string | null> {
    return '';
  }

  private async setAuthHeader(
    config: AxiosRequestConfig,
    requiresAuth: boolean,
  ): Promise<AxiosRequestConfig> {
    if (!requiresAuth) return config;

    const token = await this.getAuthToken();
    if (!token) {
      throw {
        response: {
          data: {
            success: false,
            message: 'No authentication token found',
            statusCode: 401,
            errorCode: 'NO_TOKEN',
          },
          status: 401,
        },
      };
    }

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  private handleError(error: unknown): ApiErrorResponse {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        success?: boolean;
        message?: string;
        statusCode?: number;
        errorCode?: string;
      }>;

      const res = axiosError.response?.data;
      return {
        success: false,
        message: res?.message || axiosError.message || 'An error occurred',
        statusCode: res?.statusCode || axiosError.response?.status || 0,
        errorCode: res?.errorCode || axiosError.code,
        error: {
          message: res?.message || axiosError.message || 'An unexpected error occurred',
          status: axiosError.response?.status || 0,
          code: res?.errorCode || axiosError.code,
          details: res,
        },
        data: null,
      };
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
      statusCode: 0,
      errorCode: 'UNKNOWN_ERROR',
      error: {
        message: error instanceof Error ? error.message : 'Unknown error',
        status: 0,
        code: 'UNKNOWN_ERROR',
      },
      data: null,
    };
  }

  private async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    endpoint: string,
    options: ApiRequestOptions = {},
  ): Promise<ApiResult<T>> {
    try {
      const { requiresAuth = true, ...axiosConfig } = options;

      const config = await this.setAuthHeader(
        {
          method,
          url: endpoint,
          ...axiosConfig,
        },
        requiresAuth,
      );

      const response = await this.axiosInstance.request(config);

      const { data } = response;

      if (data.success || response.status === 204) {
        return {
          success: true,
          message: data.message,
          data: data.data,
          ...(data.meta ? { meta: data.meta } : {}),
          error: null,
        };
      } else {
        const errorData = data;
        return {
          success: false,
          message: errorData.message || 'Request failed',
          statusCode: errorData.statusCode || response.status || 400,
          errorCode: errorData.errorCode,
          error: {
            message: errorData.message || 'Request failed',
            status: errorData.statusCode || response.status || 400,
            code: errorData.errorCode,
            details: data,
          },
          data: null,
        };
      }
    } catch (error) {
      return this.handleError(error);
    }
  }

  async get<T>(endpoint: string, options?: ApiRequestOptions): Promise<ApiResult<T>> {
    return this.request<T>('GET', endpoint, options);
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: ApiRequestOptions,
  ): Promise<ApiResult<T>> {
    return this.request<T>('POST', endpoint, { ...options, data });
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: ApiRequestOptions,
  ): Promise<ApiResult<T>> {
    return this.request<T>('PUT', endpoint, { ...options, data });
  }

  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: ApiRequestOptions,
  ): Promise<ApiResult<T>> {
    return this.request<T>('PATCH', endpoint, { ...options, data });
  }

  async delete<T>(endpoint: string, options?: ApiRequestOptions): Promise<ApiResult<T>> {
    return this.request<T>('DELETE', endpoint, options);
  }
}

export const apiClient = new ApiClient(env.API_URL);
