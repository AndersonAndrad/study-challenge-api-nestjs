import { Injectable, Controller } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// entities
import User from './db/models/users.entity';
import Message from './db/models/message.entity';

@Injectable()
export default class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Message) public readonly messageRepo: Repository<Message>,
  ) {}
}
