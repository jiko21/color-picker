import { ColorFrame } from '@/components/atoms/ColorFrame';
import { ColorForm } from '@/components/molecules/ColorForm';
import { Flex, View } from '@adobe/react-spectrum';
import React from 'react';

interface Props {
  color: string;
  setColor: (value: string) => void;
}

export const ColorPanel: React.FC<Props> = React.memo(({ color, setColor }) => {
  const handleChange = (value: string) => {
    setColor(value);
  };

  return (
    <ColorFrame color={color} width="100%" height="100%">
      <Flex width="100%" height="100%" direction="column" alignItems="center" justifyContent="center">
        <View>
          <Flex direction="row" alignItems="center" justifyContent="center" gap="size-100">
            <ColorForm color={color} handleChange={handleChange} />
          </Flex>
        </View>
      </Flex>
    </ColorFrame>
  );
});
