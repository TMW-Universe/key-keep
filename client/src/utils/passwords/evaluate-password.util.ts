import { green, magenta, purple, red, yellow } from "@ant-design/colors";
import { calculatePasswordScore } from "./calculate-password-score.util";

export const evaluatePassword = (password: string) => {
  const score = calculatePasswordScore(password);
  const percent = score * 10;
  let securityLevel: string;
  let color: string;

  if (percent < 25) {
    securityLevel = "very-low";
    color = red[4];
  } else if (percent <= 50) {
    securityLevel = "low";
    color = yellow[4];
  } else if (percent <= 70) {
    securityLevel = "normal";
    color = green[4];
  } else if (percent < 85) {
    securityLevel = "high";
    color = magenta[4];
  } else {
    securityLevel = "very-high";
    color = purple[4];
  }

  const isSecure = percent >= 50;

  return {
    score,
    percent,
    securityLevel,
    color,
    isSecure,
  };
};
