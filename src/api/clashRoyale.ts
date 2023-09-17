import { doRequest } from "../system/doRequest";

const apiUrl = process.env.URL_CLASH_ROYALE;

const headers = {
  'Content-Type': 'text/html',
  'Accept-Charset': 'utf-8',
  'Accept': 'application/json',
  'Authorization': 'Bearer ' + process.env.API_KEY_CLASH_ROYALE
}

function fetchUrl(resourceName: string, resourceId: string, resourceComplement: string) {
  return apiUrl + resourceName + '/' + resourceId + resourceComplement;
}

function fetchBattleLog(userTagId: string) {
  return apiUrl + 'players' + '/' + '%23' + userTagId + '/' + 'battlelog';
}

function fetchPlayer(userTagId: string) {
  return apiUrl + 'players' + '/' + '%23' + userTagId;
}

export async function clashRoyaleBattleLog(userTagId: string) {
  return new Promise((resolve, reject) => {
    doRequest(fetchBattleLog(userTagId), 'GET', headers).then(brawlData => {
      resolve(brawlData);
    }).catch(err => {
      reject(err);
    });
  });
}

export async function clashRoyalePlayer(userTagId: string) {
  return new Promise((resolve, reject) => {
    doRequest(fetchPlayer(userTagId), 'GET', headers).then(playerData => {
      resolve(playerData);
    }).catch(err => {
      reject(err);
    });
  });
}