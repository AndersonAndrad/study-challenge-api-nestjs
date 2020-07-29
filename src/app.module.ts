import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

// configs
import * as OrmOptions from './config/orm';
import RepoModule from './repo.module';

// resolvers
import UserResolver from './resolvers/user.resolve';

const gqlImports = [UserResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmOptions),
    RepoModule,
    ...gqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
