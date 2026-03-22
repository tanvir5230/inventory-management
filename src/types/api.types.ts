export interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
  meta?: IMeta;
  error: null;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  statusCode: number;
  errorCode?: string;
  error: {
    message: string;
    status: number;
    code?: string;
    details?: unknown;
  };
  data: null;
}

export type ApiResult<T> = SuccessResponse<T> | ApiErrorResponse;

export interface IMeta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface InfiniteQueryParams extends Omit<QueryParams, 'page'> {}
