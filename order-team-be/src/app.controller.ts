import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Returns a Hello World message
   *
   * @returns A simple string containing the message
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
