import { doRequest } from "../system/doRequest";

const apiUrl = process.env.URL_BRAWL_STARS;

const headers = {
  'Content-Type': 'text/html',
  'Accept-Charset': 'utf-8',
  'Accept': 'application/json',
  'Authorization': 'Bearer ' + process.env.API_KEY_BRAWL_STARS
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

export async function brawlStarsBattleLog(userTagId: string) {
  return new Promise((resolve, reject) => {
    doRequest(fetchBattleLog(userTagId), 'GET', headers).then(brawlData => {
      resolve(brawlData);
    }).catch(err => {
      reject(err);
    });
  });
}

export async function brawlStarsPlayer(userTagId: string) {
  return new Promise((resolve, reject) => {
    doRequest(fetchPlayer(userTagId), 'GET', headers).then(playerData => {
      resolve(playerData);
    }).catch(err => {
      reject(err);
    });
  });
}
