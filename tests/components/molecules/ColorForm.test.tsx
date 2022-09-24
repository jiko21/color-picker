
import { ColorForm } from '@/components/molecules/ColorForm';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

describe('@/components/molecules/ColorForm.tsx', () => {
  it('correctly call handleChange with color picker', () => {
    const color = '#FF0000';
    const handleChangeMock = jest.fn();
    render(<ColorForm color={color} handleChange={handleChangeMock} />);
    fireEvent.change(screen.getByTestId('color-picker'), {
      target: { value: '#000000' },
    });
    expect(handleChangeMock).toHaveBeenCalledWith('#000000');
  });

  it('correctly call handleChange with input text', () => {
    const color = '#FF0000';
    const handleChangeMock = jest.fn();
    render(<ColorForm color={color} handleChange={handleChangeMock} />);
    fireEvent.change(screen.getByTestId('color-text'), {
      target: { value: '#000000' },
    });
    expect(handleChangeMock).toHaveBeenCalledWith('#000000');
  });
});
