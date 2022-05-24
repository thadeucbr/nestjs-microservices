import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { send } from 'process';
import { AppService } from './app.service';
import { Client } from './entity/client.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'create_user' })
  async createUser(data: unknown): Promise<Client> {
    const response = await this.appService.createUser(data);
    return response;
  }
}
