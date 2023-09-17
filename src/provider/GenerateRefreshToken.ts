import { PrismaClient } from "@prisma/client"
import dayjs from "dayjs";

import { client } from "../prisma/client";

export default {
  async execute(userId: string) {
    const expiresIn = dayjs().add(1, "hour").unix();
    
    const generateRefreshToken = await client.refreshToken.create({
      data: {
        userId: userId,
        expiresIn,
      }
    });

    return generateRefreshToken;
  }
}