const COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;
const MAX_VALUE = 256;
export const isValidColor = (input: string): boolean => {
  return COLOR_PATTERN.test(input);
};

const getOctedMax = (): number => {
  return Math.floor(Math.random() * MAX_VALUE);
};

const parseOctedPadded = (input: number): string => {
  return input.toString(16).padStart(2, '0');
};

export const generateRandomColor = (): string => {
  return `#${parseOctedPadded(getOctedMax())}${parseOctedPadded(getOctedMax())}${parseOctedPadded(getOctedMax())}`;
};
