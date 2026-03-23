'use client';

import {
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
  useQuery,
} from '@tanstack/react-query';
import type { ApiResult } from '@/types';

export function useApiQuery<TData, TError = Error>({
  queryKey,
  queryFn,
  queryOptions,
}: {
  queryKey: QueryKey;
  queryFn: () => Promise<ApiResult<TData>>;
  queryOptions?: Omit<
    UseQueryOptions<ApiResult<TData>, TError, TData, QueryKey>,
    'queryKey' | 'queryFn' | 'select'
  >;
}): UseQueryResult<TData, TError> {
  return useQuery<ApiResult<TData>, TError, TData>({
    queryKey,
    queryFn: async () => {
      const result = await queryFn();
      if (!result.success) {
        // Throw the error object with status code information
        const error = new Error(result.message) as Error & {
          status: number;
          statusCode: number;
          errorCode?: string;
        };
        error.status = result.statusCode;
        error.statusCode = result.statusCode;
        error.errorCode = result.errorCode;
        throw error;
      }
      return result;
    },
    select: (res) => res.data as TData,
    ...queryOptions,
  });
}
