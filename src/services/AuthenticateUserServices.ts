import { PrismaClient } from '@prisma/client';
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { client } from '../prisma/client';

import GenerateRefreshToken from '../provider/GenerateRefreshToken';
import GenerateToken from '../provider/GenerateToken';

const prisma = new PrismaClient();

interface AuthenticateRequest {
  email: string;
  password: string;
};

class AuthenticateUserServices {
  async execute({ email, password }: AuthenticateRequest) {

    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if(!user) {
      throw new Error("email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("email or password incorrect");
    }

    const token = await GenerateToken.execute(user.id);

    await client.refreshToken.deleteMany({
      where: {
        userId: user.id
      }
    });
  
    const refreshToken = await GenerateRefreshToken.execute(user.id);

    return { token, refreshToken };
  }
}

export { AuthenticateUserServices };
