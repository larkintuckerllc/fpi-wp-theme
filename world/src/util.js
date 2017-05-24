// @flow
export const scaleWidth = (value: number): string => (100 * ((value - 1) / 4)).toString();
export const colorScale = (value: number): string => {
  if (value <= 1.5) return '#ff0000';
  if (value <= 2.0) return '#ff5050';
  if (value <= 2.5) return '#ff7c80';
  if (value <= 3) return '#ff9999';
  if (value <= 3.5) return '#ffcc99';
  if (value <= 4) return '#ffff99';
  if (value <= 4.5) return '#66ff66';
  return '#00cc00';
};
export const initialZoom = (width: number): number => {
  if (width < 768) return 1;
  if (width < 992) return 2;
  return 3;
};
