import { getColorsFromUrl, setColorsToUrl } from '@/util/url';

describe('@/util/url.ts', () => {
  describe('getColorsFromUrl', () => {
    beforeEach(() => {
      // @ts-ignore
      delete window.location;
    });

    afterAll(() => {
      // @ts-ignore
      window.location = new URL('http://localhost/');
    });

    it('correctly get url params', () => {
      // @ts-ignore
      window.location = new URL('http://localhost/?color=%23000000&color=%23FFFFFF');
      expect(getColorsFromUrl()).toEqual(['#000000', '#FFFFFF']);
    });
  });

  describe('setColorsToUrl', () => {
    const replaceStateMock = jest.fn();
    // @ts-ignore
    let _replaceState = null;
    beforeAll(() => {
      _replaceState = window.history.replaceState;
      window.history.replaceState = replaceStateMock;
    });

    beforeEach(() => {
      replaceStateMock.mockClear();
    });

    afterAll(() => {
      // @ts-ignore
      window.history.replaceState = _replaceState;
    });

    it('correctly set url params', () => {
      setColorsToUrl(['#000000', '#FFFFFF']);
      expect(replaceStateMock).toHaveBeenCalledWith({}, '', '/?color=%23000000&color=%23FFFFFF');
    });
  });
});
