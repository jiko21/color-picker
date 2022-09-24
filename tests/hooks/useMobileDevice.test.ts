import { useMobileDevice } from '@/hooks/useMobileDevice';
import {renderHook} from "@testing-library/react";

describe('@/hooks/useMobileDevice.ts', () => {
  describe('useMobileDevice', () => {
    it.each`
      innerWidth | expected
      ${1079}    | ${true}
      ${1080}    | ${true}
      ${1081}    | ${false}
    `('useMobileDevice() should be $expected when innerWidth = $innerWidth', ({ innerWidth, expected }) => {
      // @ts-ignore
      window.innerWidth = innerWidth;
      const { result } = renderHook(() => useMobileDevice());
      expect(result.current).toBe(expected);
    });
  });
});
