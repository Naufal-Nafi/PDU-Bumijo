export type ActionResponse<T = null> =
  | {
      success: true;
      data: T;
      message?: string;
    }
  | {
      success: false;
      message: string;
      errors?: Record<string, string[] | undefined>;
};