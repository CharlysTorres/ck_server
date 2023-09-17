import { Response, Request } from 'express';
import { clashRoyaleBattleLog, clashRoyalePlayer } from '../api/clashRoyale';

export default {
  async battleLog(request: Request, response: Response) {
    const playerTag = request.body.playerTag;

    const data = await clashRoyaleBattleLog(playerTag);

    return response.status(200).json(data);
  },

  async getMyTag(request: Request, response: Response) {
    const playerTag = request.body.playerTag;

    return response.status(200).json({ playerTag });
  },

  async player(request: Request, response: Response) {
    const playerTag = request.query.playerTag as string;

    const playerData = await clashRoyalePlayer(playerTag);

    return response.status(200).json(playerData);
  }
}
