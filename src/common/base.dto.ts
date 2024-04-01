import { Expose, plainToClass } from 'class-transformer';

export abstract class BaseDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  static plainToClass<T>(cls: new (...args: any[]) => T, plain: T): T {
    return plainToClass(cls, plain, {
      excludeExtraneousValues: true,
    });
  }
}
