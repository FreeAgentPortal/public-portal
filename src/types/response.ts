type Metadata = {
  page: number;
  pages: number;
  totalCount: number;
  prevPage: number;
  nextPage: number;
};

type ApiResponse<T> = {
  success: boolean;
  payload: T;
  metadata: Metadata;
};
