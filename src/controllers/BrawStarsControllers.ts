import { Response, Request } from 'express';
import { brawlStarsBattleLog, brawlStarsPlayer } from '../api/brawlStars';

export default {
  async battleLog(request: Request, response: Response) {
    const playerTag = request.query.playerTag as string;

    const data = await brawlStarsBattleLog(playerTag);

    return response.status(200).json(data);
  },

  async getMyTag(request: Request, response: Response) {
    const playerTag = request.body.playerTag;

    return response.status(200).json({ playerTag });
  },

  async player(request: Request, response: Response) {
    const playerTag = request.query.playerTag as string;

    const playerData = await brawlStarsPlayer(playerTag);

    return response.status(200).json(playerData);
  }
}
