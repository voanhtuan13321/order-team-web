export class User {
  userId: number;
  email: string;
  password: string;
  username?: string | undefined;
  roleId: number;
  createAt: Date;
  createBy: number;
  updateAt: Date;
  updateBy: number;
  isDeleted: boolean;
}
