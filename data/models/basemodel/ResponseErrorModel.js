export class ResponseErrorModel {
  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
  code: string;
  message: string;
}
