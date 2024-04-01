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
import { plainToClass } from 'class-transformer';

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
    const userReal = plainToClass(UserDto, user, {
      excludeExtraneousValues: true,
    });
    console.log(userReal);
    return {
      username: user.username,
      password: user.password,
    };
  }
}
