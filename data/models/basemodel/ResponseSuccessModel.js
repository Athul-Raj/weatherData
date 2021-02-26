export class ResponseSuccessModel<T> {
  constructor(code: string, data: T) {
    this.code = code;
    this.data = data;
  }
  code: string;
  data: T;
}
