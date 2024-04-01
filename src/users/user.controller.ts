import { UserService } from './user.service';
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
import { ModuleRef } from '@nestjs/core';

@Controller('users')
export class UserController {
  constructor(private moduleRef: ModuleRef) {}

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto) {
    const userService = this.moduleRef.get(UserService, { strict: false });
    return userService.createUser(user);
  }
}
