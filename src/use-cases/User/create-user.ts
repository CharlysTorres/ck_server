import { User } from "../../models/user/User";

interface CreateUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: number;
  createdAt: Date;
  updatedAt: Date;
}

type CreateUserResponse = User

export class CreateUser {
  async execute({
    id,
    name,
    email,
    password,
    admin,
    createdAt,
    updatedAt
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({
      id,
      name,
      email,
      password,
      admin,
      createdAt,
      updatedAt
    });

    return user;
  }
}