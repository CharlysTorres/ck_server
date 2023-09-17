import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const { userId } = request;

  if (!userId) {  
    response.status(401).send().json({message: `User unauthorized, code error 0.0.1`});
  }

  const { admin } = await prisma.user.findFirst({ where: { id: userId } });

  if(admin > 0) {
    return next();
  }

  return response.status(401).json({error: "User unauthorized"});

}
