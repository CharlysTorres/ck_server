import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import crypto from "crypto";
import dayjs from "dayjs";

import UsersView from '../views/UsersView';
import { client } from '../prisma/client';
import { stringGenerateRandom } from '../utils/stringGenerateRandom';

export default {
  async create( request: Request, response: Response ) {
    const { name, email, password } = request.body;

    const userAlreadyExists = await client.user.findFirst({
      where: {
        email,
      }
    });

    if(!email) {
      throw new Error('email not found or invalid');
    }

    if(userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    });

    return response.status(201).json(user);
  },

  async index( request: Request, response: Response ) {
    const userId = request.params.id;

    const user = await client.user.findFirst({
      where: {
        id: userId
      }
    });

    return response.status(200).json(UsersView.render(user));
  },

  async listUsers( request: Request, response: Response ) {

    const users = await client.user.findMany();

    return response.status(200).json(UsersView.renderMany(users));
  },

  async forgotPassword( request: Request, response: Response ) {
    const { email } = request.body;

    const user = await client.user.findFirst({
      where: {
        email
      }
    });

    if(!user) {
      throw new Error('User not found');
    }

    const expiresIn = dayjs().add(1, "hour").unix();

    function localGenerateConfirmationCode() {
      let letterPart;
      do {
        letterPart = stringGenerateRandom(2, 2).toUpperCase();
      } while ((letterPart === 'CU') || (letterPart.indexOf('O') !== -1)); // Removes undesired words and the `O` character (avoiding mistakes with 0 character).
    
      let numberPart;
      do {
        numberPart = stringGenerateRandom(4, 1);
      } while (numberPart.indexOf('0') !== -1); // Removes the `0` character (avoiding mistakes with O character).
    
      return {
        raw: letterPart + numberPart,
        formatted: letterPart + '-' + numberPart,
        expiresIn
      };
    };

    const token = localGenerateConfirmationCode();

    return response.status(200).json(token)
  },

  async delete( request: Request, response: Response ) {
    const userId = request.params.userId;
  }
}