import { ApiProperty } from '@nestjs/swagger'
export class CreateUserDto {
  @ApiProperty({
    example: 'Sachin Singth',
    description: 'the name of the user',
  })
  name: string
  @ApiProperty({
    example: 'sachin@gmail.com',
    description: 'the email of the user',
  })
  email: string
}
