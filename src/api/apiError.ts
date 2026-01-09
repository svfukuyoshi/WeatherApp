export enum ApiErrorType {
  TIMEOUT = 'TIMEOUT',
  NETWORK = 'NETWORK',
  NOT_FOUND = 'NOT_FOUND',
  UNKNOWN = 'UNKNOWN',
}

export class ApiError extends Error {
  type: ApiErrorType;
  constructor(message: string, type: ApiErrorType) {
    super(message);
    this.type = type;
  }
}
