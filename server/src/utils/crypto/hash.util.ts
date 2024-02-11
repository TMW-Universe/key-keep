import * as CryptoJS from 'crypto-js';

export const hash = (text: string) => {
  const hashed = CryptoJS.SHA3(text);
  return hashed.toString(CryptoJS.enc.Base64);
};
