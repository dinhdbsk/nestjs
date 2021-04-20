import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  findAll(name: string) {
    if (name) {
      return this.users.filter((user) => user.name.includes(name));
    }
    return this.users;
  }

  findById(id: number) {
    return this.users.find((ele) => ele.id == id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = { id: Math.random(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
