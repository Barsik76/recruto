import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string, message: string): string {
    return `Hello ${name}! ${message}!`;
  }
}
