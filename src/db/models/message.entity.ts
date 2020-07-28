import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

// entityes
import User from './users.entity';

@ObjectType()
@Entity({ name: 'messages' })
export default class Message {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'user_id' })
  userId: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => User)
  user: User;

  // associations
  @OneToMany(
    () => User,
    user => user.messageConnection,
  )
  @JoinColumn({ name: 'user_id' })
  userConnection: Promise<User>;
}
