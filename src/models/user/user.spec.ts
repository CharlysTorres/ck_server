import { expect, test } from 'vitest';
import { User } from './User';

test('create an user', () => {
  const user = new User({
    id: '128bu1ikjy4h24jh14y121hbcxa',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    admin: 0,
    createdAt: new Date,
    updatedAt: new Date,
    password: 'password'
  });

  expect(user).toBeInstanceOf(User);
});

test('cannot create an user with updatedAt before createdAt', () => {
  const createdAt = new Date();
  const updatedAt = new Date();

  updatedAt.setDate(updatedAt.getDate() - 1);

  expect(() => {
    return new User({
      id: '128bu1ikjy4h24jh14y121hbcxa',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      admin: 0,
      createdAt: createdAt,
      updatedAt: updatedAt,
      password: 'password'
    });
  }).toThrow()
});

test('cannot create an user with createdAt before now', () => {
  const createdAt = new Date();
  const updatedAt = new Date();

  createdAt.setDate(createdAt.getDate() - 1);
  updatedAt.setDate(updatedAt.getDate() + 3);

  expect(() => {
    return new User({
      id: '128bu1ikjy4h24jh14y121hbcxa',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      admin: 0,
      createdAt: createdAt,
      updatedAt: updatedAt,
      password: 'password'
    });
  }).toThrow()
});