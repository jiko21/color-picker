import { ColorFrame } from '@/components/atoms/ColorFrame';
import { render } from '@testing-library/react';
import React from 'react';

describe('@/components/atoms/ColorFrame.tsx', () => {
  it('correctly render', () => {
    const component = render(<ColorFrame color={'#ff0000'}>children</ColorFrame>);
    expect(component.container).toMatchSnapshot();
  });
});
