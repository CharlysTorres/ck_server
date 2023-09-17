import axios from 'axios';

interface DoRequestProps {
  url: string,
  method: string,
  headers?: object,
  body?: object,
  authorization: string,
  returnOnlyResponseBody?: boolean
}

export function doRequest(url: string, method: string, headers?: object, body?: object, returnOnlyResponseBody = true): Promise<any> {
  return new Promise((resolve, reject) => {
    const options = {
      method: method,
      url: url,
      headers: headers ? headers : {},
      data: body
    };

    axios(options)
        .then(function (response) {
          resolve(returnOnlyResponseBody ? response.data : response);
        })
        .catch(function (error: Error) {
          console.error(error);
          reject(error);
        });
  });
}