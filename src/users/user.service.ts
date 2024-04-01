import { UserDto } from './user.dto';

export class UserService {
  createUser(user: any) {
    user.createdAt = new Date();
    const userReal = UserDto.plainToClass(UserDto, user);
    return userReal;
  }
}
