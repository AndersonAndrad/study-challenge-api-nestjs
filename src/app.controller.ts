import { Controller, Get } from '@nestjs/common';
import RepoService from './repo.services';

@Controller()
export class AppController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  async getHello(): Promise<string> {
    return `There are ${await this.repoService.messageRepo.count()} existent  messages`;
  }
}
