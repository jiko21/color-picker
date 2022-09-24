import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
  header: ReactElement;
}

export const DefaultTemplate: React.FC<Props> = ({ children, header }) => {
  return (
    <>
      {header}
      {children}
    </>
  );
};
