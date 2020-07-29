import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import RepoService from '../repo.services';

// entities (if case error, add ../db/models/users.entity)
import User from 'src/db/models/users.entity';
import UserInput from './input/user.input';

@Resolver()
export default class UserResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.repoService.userRepo.find();
  }

  @Query(() => User, { nullable: true })
  public async getUser(@Args('id') id: number): Promise<User> {
    return this.repoService.userRepo.findOne(id);
  }

  @Mutation(() => User)
  public async createUser(@Args('data') input: UserInput): Promise<User> {
    const user = this.repoService.userRepo.create({ email: input.email });
    return this.repoService.userRepo.save(user);
  }
}
