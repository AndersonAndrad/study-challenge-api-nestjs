import { Field, InputType } from '@nestjs/graphql';
import UserInput from './user.input';

@InputType()
class MessageUserConnectInput {
  @Field()
  readonly id: string;
}

@InputType()
class MessageUserInput {
  @Field()
  readonly connect: MessageUserConnectInput;

  @Field({ nullable: true })
  readonly create: UserInput;
}

@InputType()
class MessageInput {
  @Field()
  readonly content: string;

  @Field()
  readonly user: MessageUserInput;
}

export default MessageInput;
