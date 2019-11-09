import * as React from 'react';
import styled from '@emotion/styled';

const Text = styled.span(({ visible }: { visible?: boolean }) => ({
  opacity: visible ? 1 : 0,
  transition: 'opacity 10ms',
}));

type Props = {
  progress: number;
  text: string;
};

const TypeTransition = ({ progress, text }: Props) => {
  const visibleText = text.slice(0, progress);
  const invisibleText = text.slice(progress);

  return (
    <React.Fragment>
      <Text visible>{visibleText}</Text>
      <Text>{invisibleText}</Text>
    </React.Fragment>
  );
};

export default TypeTransition;
