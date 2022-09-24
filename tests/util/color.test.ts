import { generateRandomColor, isValidColor } from '@/util/color';

describe('@/util/color.ts', () => {
  describe('isValidColor()', () => {
    it.each`
      input        | expected
      ${'#FF0000'} | ${true}
      ${'#0000ff'} | ${true}
      ${'#001400'} | ${true}
      ${'#001a00'} | ${true}
      ${'#af1fzZ'} | ${false}
      ${'#af1f'}   | ${false}
    `('isValidColor($input) should be $expected', ({ input, expected }) => {
      expect(isValidColor(input)).toBe(expected);
    });
  });

  describe('generateRandomColor()', () => {
    it('correctly generated', () => {
      expect(generateRandomColor()).toMatch(/^#[0-9a-fA-F]{6}$/);
    });
  });
});
