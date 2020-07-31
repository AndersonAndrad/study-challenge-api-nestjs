import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import RepoService from '../repo.services';

// entities
import Message from 'src/db/models/message.entity';
import User from 'src/db/models/users.entity';

// inputs
import MessageInput, { DeleteMessageInput } from './input/message.input';

@Resolver(() => Message)
export default class MessageResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Message])
  public async getMessages(): Promise<Message[]> {
    return this.repoService.messageRepo.find();
  }

  @Query(() => [Message])
  public async getMessagesFromUser(
    @Args('userId') userId: number,
  ): Promise<Message[]> {
    return this.repoService.messageRepo.find({
      where: { userId },
    });
  }

  @Query(() => Message, { nullable: true })
  public async getMessage(@Args('id') id: number): Promise<Message> {
    return this.repoService.messageRepo.findOne(id);
  }

  @Mutation(() => Message)
  public async createMessage(
    @Args('data') input: MessageInput,
  ): Promise<Message> {
    const message = this.repoService.messageRepo.create({
      userId: input.userId,
      content: input.content,
    });

    return this.repoService.messageRepo.save(message);
  }

  @Mutation(() => Message, { nullable: true })
  public async deleteMessage(
    @Args('data') input: DeleteMessageInput,
  ): Promise<Message> {
    const message = await this.repoService.messageRepo.findOne(input.id);

    if (!message || message.userId != input.userId) {
      return null;
    }

    const copy = { ...message };

    await this.repoService.messageRepo.remove(message);

    return copy;
  }

  @ResolveField(() => User, { name: 'user' })
  public async getUser(@Parent() parent: Message): Promise<User> {
    return this.repoService.userRepo.findOne(parent.userId);
  }
}
