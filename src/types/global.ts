export interface DefaultResponse<T> {
  data: T;
  message: string;
  status: boolean;
  timestamp: string;
}

export interface Paginate<T> {
  nextPageUrl: any;
  data: T[];
  links: {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    links: {
      active: boolean;
      label: string;
      url: string;
    }[];
    per_page: string;
    to: number;
    total: number;
  };
}

export interface ErrorResponse {
  message: string;
  status: boolean;
  statusCode: string;
  timestamp: string;
  params?: Record<string, string[]>;
}

export interface Translation {
  id: number;
  locale: string;
  title: string;
}

export type ParamsType = Record<
  string,
  | string
  | number
  | undefined
  | null
  | string[]
  | (number | undefined)[]
  | boolean
  | Record<string, string | number | undefined>[]
>;
