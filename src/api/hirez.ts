import { createSignature } from "../utils/signature";
import { doRequest } from "../system/doRequest";

interface SessionResponse {
  ret_msg: string;
	session_id: string;
	timestamp: string;
}

const headers = {
  'Content-Type': 'text/html',
  'Accept-Charset': 'utf-8',
  'Accept': 'application/json',
}

export function createSession(apiUrl: string, timestamp: string): Promise<SessionResponse> {
  return new Promise((resolve, reject) => {
    const url = apiUrl + 'createsessionJson/' + process.env.HIREZ_DEV_ID + '/' + createSignature('createsession', timestamp) + '/' + timestamp;
    doRequest(url, 'GET', headers).then(session => {
      if(session.ret_msg != 'Approved') {
        throw new Error(session.ret_msg)
      }
      resolve(session);
    }).catch(err => {
      reject(err);
    });
  });
}
