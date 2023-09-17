import { IStatsResponse } from '../@types/fortnite/stats';
import { doRequest } from '../system/doRequest';

const apiUrl =  process.env.URL_FORTNITE;

const headers = {
  'Content-Type': 'text/html',
  'Accept-Charset': 'utf-8',
  'Accept': 'application/json',
  'Authorization': process.env.API_KEY_FORTNITE
};

function fetchUrl(resourceName: string, resourceId: string, resourceComplement: string) {
  return apiUrl + resourceName + '/' + resourceId + resourceComplement;
}

function fetchStats(accountId: string) {
  return apiUrl + accountId;
}

export async function getStats(accountId: string): Promise<IStatsResponse> {
  return new Promise((resolve, reject) => {
    doRequest(fetchStats(accountId), 'GET', headers).then(fortniteData => {
      resolve(fortniteData);
    }).catch(err => {
      reject(err);
    });
  });
}