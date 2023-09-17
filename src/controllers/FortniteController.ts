import { Response, Request } from 'express';
import { getStats } from '../api/fortnite';

export default {
  async getStatus(request: Request, response: Response) {
    const epicAccountId = request.query.accountId as string;

    const data = await getStats(epicAccountId);

    return response.status(200).json(data);
  }
}