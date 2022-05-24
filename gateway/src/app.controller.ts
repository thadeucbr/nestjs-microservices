import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './createUser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('client')
  async createUser(@Body() createUser: CreateUserDto) {
    const variavel = await this.appService.createUser(createUser);
    return { message: variavel };
  }
}
