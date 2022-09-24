import { Flex, View } from '@adobe/react-spectrum';
import React from 'react';

interface Props {
  children: React.ReactNode;
  color: string;
  width?: string;
  height?: string;
}

export const ColorFrame: React.FC<Props> = React.memo(({ children, color, width, height }) => (
  <Flex
    UNSAFE_style={{
      backgroundColor: color,
    }}
    width={width}
    height={height}
    alignItems="center"
    justifyContent="center"
  >
    <View>{children}</View>
  </Flex>
));
