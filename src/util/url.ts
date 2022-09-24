const getUrlParams = (key: string) => {
  const urlParams = new URL(window.location.href);
  const urlSearchParams = new URLSearchParams(urlParams.search.slice(1));
  return urlSearchParams.getAll(key);
};

export const getColorsFromUrl = () => {
  return getUrlParams('color');
};

export const setColorsToUrl = (colors: string[]) => {
  const urlParams = new URL(window.location.href);
  const urlSearchParams = new URLSearchParams(urlParams.search.slice(1));
  urlSearchParams.delete('color');
  colors.forEach((color) => {
    urlSearchParams.append('color', color);
  });
  window.history.replaceState({}, '', `${location.pathname}?${urlSearchParams}`);
};

export const copyUrlToClipboard = () => {
  navigator.clipboard?.writeText(location.href);
};
