import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationExeption extends HttpException {
  messages: object;

  constructor(response: object) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}
