
import { doRequest } from "../system/doRequest";
import { timestamp } from "../utils/timestamp";
import { createSignature } from "../utils/signature";
import { createSession } from './hirez';
import { client } from "../prisma/client";

const apiUrl = process.env.URL_PALADINS;

const headers = {
  'Content-Type': 'text/html',
  'Accept-Charset': 'utf-8',
  'Accept': 'application/json',
}

function fetchUrl(resourceName: string, resourceId: string, resourceComplement: string) {
  return apiUrl + resourceName + '/' + resourceId + resourceComplement;
}

function fetchGetPlayer(signature: string, sessionId: string, timestamp: string, playerName: string) {
  return apiUrl + 'getplayerJson/' + process.env.HIREZ_DEV_ID + '/' + signature + '/' + sessionId + '/' + timestamp + '/' + playerName;
}

export async function getPlayer(playerName: string) {
  const timestamps = timestamp(new Date());
  const sessionData = await createSession(apiUrl as string, timestamps);
  console.log("session ", sessionData)
  if(sessionData) {
    await client.hirez_session.create({
      data: {
        sessionId: sessionData.session_id,
        timestamp: sessionData.timestamp
      }
    })
  }

  return new Promise((resolve, reject) => {
    doRequest(fetchGetPlayer(createSignature('getplayer', timestamps), sessionData.session_id, timestamps, playerName), 'GET', headers)
      .then((playerData) => {
        if(playerData[0].ret_msg != null) {
          throw new Error(playerData[0].ret_msg)
        }
        console.log(playerData)
        resolve(playerData[0]);
      })
      .catch((error) => {
        reject(error)
        throw new Error(error);
      })
  });
}
