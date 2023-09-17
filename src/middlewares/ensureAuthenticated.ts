import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface Payload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  
  // Authorization token
  const authToken = request.headers.authorization;

  // Validate if token is filled
  if (!authToken) {
    return response.status(401).end(new Error("unauthorized, Please try again later!!"));
  }

  const [, token] = authToken.split(" ");

  try {
    // Validate if token is valid
    const decode = verify(token, process.env.SECRET_KEY as string) as Payload;

    // Recover user info
    request.userId = decode.sub;
    
    return next(), decode;
    
  } catch(err) {
    throw new Error("Not authorized, please login again!");
  }
}
