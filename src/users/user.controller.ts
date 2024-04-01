import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto) {
    user.createdAt = new Date();
    const userReal = UserDto.plainToClass(UserDto, user);
    return userReal;
  }
}
