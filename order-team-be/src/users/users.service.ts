import { Injectable } from '@nestjs/common';
import { DatabaseService } from './../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  /**
   * Retrieves all users from the database.
   *
   * @returns {Promise<User[]>}
   */
  async findAll(): Promise<User[]> {
    return await this.databaseService.users.findMany();
  }

  /**
   * Retrieves a user by their ID from the database.
   *
   * @param {number} id The ID of the user to retrieve.
   * @returns {Promise<User | null>}
   */
  async findOne(id: number): Promise<any | null> {
    return this.databaseService.users.findUnique({
      where: { userId: id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
