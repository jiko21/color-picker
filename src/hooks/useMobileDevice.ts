import { useLayoutEffect, useState } from 'react';

interface WindowSides {
  height: number;
  width: number;
}

const MAX_WIDTH = 1080;
export const useMobileDevice = () => {
  const [windowSides, setWindowSides] = useState<WindowSides>({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const handleWindowSizes = () => {
      setWindowSides({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    document.addEventListener('resize', handleWindowSizes);
    handleWindowSizes();
    return document.removeEventListener('resize', handleWindowSizes);
  }, []);

  return windowSides.width <= MAX_WIDTH;
};
