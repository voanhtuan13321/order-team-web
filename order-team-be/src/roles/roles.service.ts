import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createRoleDto: CreateRoleDto) {
    console.log(createRoleDto);
    return 'This action adds a new role';
  }

  /**
   * Retrieves all roles from the database.
   *
   * @returns {Promise<Role[]>}
   */
  findAll(): Promise<Role[]> {
    return this.databaseService.roles.findMany();
  }

  /**
   * Retrieves a role by its ID from the database.
   *
   * @param {number} id The ID of the role to retrieve.
   * @returns {Promise<Role | null>}
   */
  findOne(id: number): Promise<Role | null> {
    return this.databaseService.roles.findUnique({
      where: { roleId: id },
    });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    console.log(updateRoleDto);
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
