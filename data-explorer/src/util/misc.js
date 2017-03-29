export const scaleWidth = v => 100 * ((v - 1) / 5);
export const colorScale = (value) => {
  if (value <= 1.5) return '#ff0000';
  if (value <= 2.0) return '#ff5050';
  if (value <= 2.5) return '#ff7c80';
  if (value <= 3) return '#ff9999';
  if (value <= 3.5) return '#ffcc99';
  if (value <= 4) return '#ffff99';
  if (value <= 4.5) return '#66ff66';
  return '#00cc00';
};
