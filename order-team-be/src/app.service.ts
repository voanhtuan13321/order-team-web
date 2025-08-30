import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Returns a Hello World message
   *
   * @returns A simple string containing the message
   */
  getHello(): string {
    return 'Hello World!';
  }
}
