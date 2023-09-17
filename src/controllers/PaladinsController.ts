import { Response, Request } from 'express';
import { getPlayer } from '../api/paladins';

export default {
  async getPlayer(request: Request, response: Response) {
    const playerName = request.query.playerName as string;
    console.log("playerName:", playerName)
    const playerData = await getPlayer(playerName);

    response.status(200).json(playerData);
  }
}