import dayjs from "dayjs";

import { client } from "../prisma/client"
import GenerateRefreshToken from "../provider/GenerateRefreshToken";
import GenerateToken from "../provider/GenerateToken";


export default {
  async execute(refresh_Token: string) {

    const refreshToken = await client.refreshToken.findFirst({
      where: {
        id: refresh_Token
      }
    });

    if(!refreshToken) {
      throw new Error("Invalid refresh token");
    }

    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));

    const token = await GenerateToken.execute(refreshToken.userId);

    if(refreshTokenExpired) {
     await client.refreshToken.deleteMany({
      where: {
        userId: refreshToken.userId
      }
     });
      const newRefreshToken = await GenerateRefreshToken.execute(refreshToken.userId);

      return { token, refreshToken: newRefreshToken };
    }

    return { token }
  }
}
