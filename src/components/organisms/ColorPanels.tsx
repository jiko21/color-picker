import { ColorPanel } from '@/components/organisms/ColorPanel';
import { useMobileDevice } from '@/hooks/useMobileDevice';
import { copyUrlToClipboard } from '@/util/url';
import { ActionButton, Flex, Tooltip, TooltipTrigger, View } from '@adobe/react-spectrum';
import Add from '@spectrum-icons/workflow/Add';
import Link from '@spectrum-icons/workflow/Link';
import React from 'react';

interface ColorPanelsProps {
  colors: string[];
  addColor: () => void;
  setColor: (value: string, i: number) => void;
}

export const ColorPanels: React.FC<ColorPanelsProps> = ({ colors, addColor, setColor }) => {
  const clickLink = () => {
    copyUrlToClipboard();
  };

  const isMobile = useMobileDevice();

  const direction = isMobile ? 'column' : 'row';

  return (
    <Flex direction={direction} width="100%" height="calc(100vh - size-200)" gap="size-10">
       <View width="100%" height="100%">
        <Flex direction={direction} width="100%" height="100%">
           {colors.map((color, i) => (
            <ColorPanel color={color} setColor={(value) => setColor(value, i)} key={i} />
           ))}
        </Flex>
        <View position="absolute" bottom="size-500" right="size-500" zIndex={100}>
          <TooltipTrigger>
            <ActionButton aria-label="Link Only" onPress={clickLink} data-testid="link-button">
              <Link aria-label="LinkIcon" />
            </ActionButton>
            <Tooltip>Share this color schema with link</Tooltip>
          </TooltipTrigger>
        </View>
       </View>
       <View alignSelf="center" justifySelf="center">
        <ActionButton aria-label="Icon Only" onPress={addColor} data-testid="add-button">
          <Add aria-label="AddIcon" />
        </ActionButton>
       </View>
    </Flex>
  );
};
