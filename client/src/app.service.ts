import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entity/client.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(data: unknown): Promise<Client> {
    const response = await this.clientRepository.save(data);
    return response;
  }
}
