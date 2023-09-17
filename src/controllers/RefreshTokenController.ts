import { Request, Response } from 'express';
import RefreshTokenServices from '../services/RefreshTokenServices';

export default {
  async handle( request: Request, response: Response ) {
    const { refresh_token } = request.body;

    const token = await RefreshTokenServices.execute(refresh_token);

    return response.status(200).json(token);
  }
}