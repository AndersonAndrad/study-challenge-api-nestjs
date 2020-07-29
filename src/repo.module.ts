import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoService from './repo.services';
import User from './db/models/users.entity';
import Message from './db/models/message.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Message])],
  providers: [RepoService],
  exports: [RepoService],
})
export default class RepoModule {}
