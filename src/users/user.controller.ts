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

@Controller('users')
export class UserController {
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }

  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }
}
