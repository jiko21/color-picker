import { ColorPanels } from '@/components/organisms/ColorPanels';
import * as urlUtil from '@/util/url';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('@/util/url');

const shouldInputElementsCorrect = (count: number) => {
  const textInputs = screen.getAllByTestId('color-text');
  const colorPickers = screen.getAllByTestId('color-picker');
  expect(textInputs.length).toBe(count);
  expect(colorPickers.length).toBe(count);
  for (let i = 0; i < count; ++i) {
    expect(textInputs[i].getAttribute('value')).toMatch(/^#[0-9a-fA-F]{6}$/);
    expect(textInputs[i].getAttribute('value')).toBe(colorPickers[i].getAttribute('value'));
  }
};

describe('@/components/organisms/ColorPanels.tsx', () => {
  const colors = ['#ff0000'];
  const addColorMock = jest.fn();
  const setColorMock = jest.fn();
  const copyUrlToClipboardMock = jest.spyOn(urlUtil, 'copyUrlToClipboard');
  const Target = () => (
    <ColorPanels colors={colors} addColor={addColorMock} setColor={setColorMock} />
  );

  afterEach(() => {
    addColorMock.mockClear();
    setColorMock.mockClear();
    copyUrlToClipboardMock.mockClear();
  });

  it('correctly render', () => {
    render(<Target />);
    shouldInputElementsCorrect(1);
  });

  it('correctly add color picker', () => {
    render(<Target />);
    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);
  });

  it('correctly call copyUrlToClipboard when link icon clicked', () => {
    render(<Target />);
    const linkButton = screen.getByTestId('link-button');
    fireEvent.click(linkButton);
    expect(copyUrlToClipboardMock).toHaveBeenCalled();
  });
});
