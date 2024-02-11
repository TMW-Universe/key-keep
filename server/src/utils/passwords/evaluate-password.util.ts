import { calculatePasswordScore } from './calculate-password-score.util';

export const evaluatePassword = (password: string) => {
  const score = calculatePasswordScore(password);
  const percent = score * 10;
  let securityLevel: string;

  if (percent < 25) {
    securityLevel = 'very-low';
  } else if (percent <= 50) {
    securityLevel = 'low';
  } else if (percent <= 70) {
    securityLevel = 'normal';
  } else if (percent < 85) {
    securityLevel = 'high';
  } else {
    securityLevel = 'very-high';
  }

  const isSecure = percent >= 50;

  return {
    score,
    percent,
    securityLevel,
    isSecure,
  };
};
