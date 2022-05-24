import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('CLIENT') private readonly clientClient: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(clientData: unknown) {
    const data = firstValueFrom(
      this.clientClient
        .send({ cmd: 'create_user' }, clientData)
        .pipe(timeout(5000)),
    );
    return data;
  }
}
