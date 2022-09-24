import React from 'react';
import { Flex, Header as SpectrumHeader, View } from '@adobe/react-spectrum';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <SpectrumHeader>
      <Flex direction="row" gap="size-400" alignItems="center" justifyContent="center">
        <View>{children}</View>
      </Flex>
    </SpectrumHeader>
  );
};
