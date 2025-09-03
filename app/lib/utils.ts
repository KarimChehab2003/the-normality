import { anomalies, Anomaly } from "./anomalies";

export const changeTextContent = (
  id: string,
  altertedText: string,
  originalText: string
): Anomaly => {
  return {
    apply: () => {
      const element = document.getElementById(id);
      if (element) element.textContent = altertedText;
    },
    revert: () => {
      const element = document.getElementById(id);
      if (element) element.textContent = originalText;
    },
  };
};

export const getAnomaliesSize = () => {
  const keys = Object.keys(anomalies);
  return keys.length;
}
