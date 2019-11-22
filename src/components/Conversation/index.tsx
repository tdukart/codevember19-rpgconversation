import * as React from 'react';
import styled from '@emotion/styled';

const ConversationContainer = styled.div({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
});

const ConservationDialog = styled.div({
  fontFamily: 'Oswald, sans-serif',
  fontSize: '20px',
  border: '1px solid #000',
  borderRadius: '1.25em',
  minWidth: '80%',
  flex: 1,
  height: '100px',
  margin: '0 1em 1em 1em',
  padding: '1.325em .5em',
  background: '#fff',
});

const Speaker = styled.div<Pick<Props, 'speakerPosition'>>(
  ({ speakerPosition = 'left' }) => ({
    fontFamily: 'Bangers, sans-serif',
    fontSize: '19px',
    border: '1px solid #000',
    borderRadius: '.25em',
    width: '15em',
    position: 'absolute',
    [speakerPosition]: '10%',
    height: '1.25em',
    background: '#fff',
    top: '-.625em',
  })
);

type Props = {
  speaker: String;
  speakerPosition?: 'left' | 'right';
  children: React.ReactNode;
};

const Conversation = ({ speaker, speakerPosition, children }: Props) => (
  <ConversationContainer>
    <Speaker speakerPosition={speakerPosition}>{speaker}</Speaker>
    <ConservationDialog>{children}</ConservationDialog>
  </ConversationContainer>
);

export default Conversation;
