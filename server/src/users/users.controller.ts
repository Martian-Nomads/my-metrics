import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	async getUsers(): Promise<string> {
		let users = await this.usersService.findAll();
		return `there are ${users.length} users`;
	}
}
