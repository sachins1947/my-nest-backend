import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './users.service'
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  create(@Body() createUserDto: CreateUserDto): User {
    return this.userService.create(createUserDto)
  }
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  findAll(): User[] {
    return this.userService.findAll()
  }
}
