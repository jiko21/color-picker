import { TextField, View } from '@adobe/react-spectrum';
import React from 'react';

interface Props {
  color: string;
  handleChange: (value: string) => void;
}

export const ColorForm: React.FC<Props> = React.memo(({ color, handleChange }) => {
  return (
    <>
      <View>
        <input type="color" value={color} onChange={(e) => handleChange(e.target.value)} data-testid="color-picker" />
      </View>
      <View>
        <TextField value={color} onChange={handleChange} data-testid="color-text" />
      </View>
    </>
  );
});
