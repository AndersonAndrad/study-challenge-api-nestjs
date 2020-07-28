import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// configs
import * as OrmOptions from './config/orm';

@Module({
  imports: [TypeOrmModule.forRoot(OrmOptions), RepoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
