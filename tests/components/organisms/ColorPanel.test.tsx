import { ColorPanel } from '@/components/organisms/ColorPanel';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

describe('components/Organisms/ColorPanel.tsx', () => {
  const COLOR = '#FFFFFF';
  const setColorMock = jest.fn();

  afterEach(() => {
    setColorMock.mockClear();
  });

  it('correctly render', () => {
    render(<ColorPanel color={COLOR} setColor={setColorMock} />);
    const textInput = screen.getByTestId('color-text');
    const colorPicker = screen.getByTestId('color-picker');
    expect(textInput.getAttribute('value')).toBe(COLOR);
    expect(colorPicker.getAttribute('value')).toBe(COLOR);
  });

  it('correctly setColor called with color picker', () => {
    render(<ColorPanel color={COLOR} setColor={setColorMock} />);
    fireEvent.change(screen.getByTestId('color-picker'), {
      target: { value: '#000000' },
    });
    expect(setColorMock).toHaveBeenCalledWith('#000000');
  });

  it('correctly setColor called with color input text', () => {
    render(<ColorPanel color={COLOR} setColor={setColorMock} />);
    fireEvent.change(screen.getByTestId('color-text'), {
      target: { value: '#000000' },
    });
    expect(setColorMock).toHaveBeenCalledWith('#000000');
  });
});
