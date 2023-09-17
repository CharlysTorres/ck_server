import { sign } from "jsonwebtoken";

export default {
  async execute(userId: string) {
    const token = sign({}, process.env.SECRET_KEY as string, {
      subject: userId,
      expiresIn: "1h",
    });

    return token;
  }
}