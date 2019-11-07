/* global document */

import * as React from 'react';
import { render } from 'react-dom';
import styled from '@emotion/styled';

import './styles.css';

/*
Fonts:
font-family: 'Big Shoulders Display', cursive;
font-family: 'Big Shoulders Text', cursive;
 */

const ConversationContainer = styled.div({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
});

const ConservationDialog = styled.div({
  border: '1px solid #000',
  borderRadius: '3em',
  minWidth: '80%',
  flex: 1,
  height: '250px',
  margin: '1em',
  paddingTop: '1.325em',
});

type SpeakerProps = { speakerPosition?: 'left' | 'right' };

const Speaker = styled.div<SpeakerProps>(({ speakerPosition = 'left' }) => ({
  border: '1px solid #000',
  borderRadius: '2em',
  width: '15em',
  position: 'absolute',
  [speakerPosition]: '10%',
  height: '2em',
  background: '#fff',
  top: '-.25em',
}));

const App = (): React.ReactElement => (
  <div className="App">
    <ConversationContainer>
      <Speaker>Me</Speaker>
      <ConservationDialog>hello world</ConservationDialog>
    </ConversationContainer>
  </div>
);

const rootElement = document.getElementById('root');
render(<App />, rootElement);
