import MD5 from 'crypto-js/md5';

export function createSignature(methodName: string, timestamp: string) {
  const string = process.env.HIREZ_DEV_ID + methodName + process.env.HIREZ_AUTH_KEY + timestamp;

  return MD5(string).toString();
}
