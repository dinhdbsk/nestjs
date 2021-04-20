import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { FindOneParams } from './dto/FindOneParams.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  @ApiQuery({ name: 'name', required: false })
  getUsers(@Query('name') name?: string): User[] {
    return this.userService.findAll(name);
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @Get(':id')
  getUserById(@Param() params: FindOneParams): User {
    let user = this.userService.findById(params.id);
    if (!user) {
      throw new NotFoundException('User is not found');
    }
    return user;
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    const newUser = this.userService.createUser(body);
    return newUser;
  }
}
