import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
export interface User {
  id: number
  name: string
  email: string
}
@Injectable()
export class UsersService {
  private users: User[] = []
  create(userDto: CreateUserDto): User {
    const newUser = { id: this.users.length + 1, ...userDto }
    this.users.push(newUser)
    return newUser
  }
  findAll(): User[] {
    return this.users
  }
}
