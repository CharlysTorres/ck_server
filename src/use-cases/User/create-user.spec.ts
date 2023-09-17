import { describe, expect, it } from 'vitest';
import { User } from '../../models/user/User';
import { CreateUser } from './create-user';

describe('Create User', () => {
  it('should be able to create an user', () => {
    const createUser = new CreateUser();

    const createdAt = new Date();
    const updatedAt = new Date();

    createdAt.setDate(createdAt.getDate() + 1);
    updatedAt.setDate(updatedAt.getDate() + 2);

    expect(createUser.execute({
      id: '128bu1ikjy4h24jh14y121hbcxa',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      admin: 0,
      createdAt,
      updatedAt,
      password: 'password'
    })).resolves.toBeInstanceOf(User)
  })
})