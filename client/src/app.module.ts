import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './entity/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
