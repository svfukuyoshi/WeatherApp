export const getTempColor = (temp: number) => {
  if (temp <= 0) return '#00BFFF';        // Ice blue
  if (temp > 0 && temp <= 15) return '#1E90FF'; // Cold blue
  if (temp > 15 && temp <= 25) return '#32CD32'; // Green for mild
  if (temp > 25 && temp <= 35) return '#FFA500'; // Orange warm
  return '#FF4500';                        // Hot red
};

export const getTempBackground = (temp: number) => {
  if (temp <= 0) return '#E0F7FF';         // Light icy blue
  if (temp > 0 && temp <= 15) return '#D0E8FF'; // Light cold blue
  if (temp > 15 && temp <= 25) return '#E0FFD4'; // Light green
  if (temp > 25 && temp <= 35) return '#FFF4D0'; // Light orange
  return '#FFD4D0';                         // Light red
};