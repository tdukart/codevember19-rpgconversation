/* global document */

import * as React from 'react';
import { render } from 'react-dom';
import Conversation from './components/Conversation';
import TypeTransition from './components/TypeTransition';
import { joke } from './joke.json';

import './styles.css';

const text = joke;

const App = (): React.ReactElement => {
  const [progress, setProgress] = React.useState<number>(0);
  const [running, setRunning] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (running && progress < text.length) {
      requestAnimationFrame(() => {
        setProgress(progress + 3);
      });
    }
  }, [progress, running]);

  return (
    <div
      className="App"
      onClick={() => {
        setRunning(true);
      }}
    >
      <Conversation speaker="Somebody" speakerPosition="left">
        <TypeTransition progress={progress} text={text} />
      </Conversation>
    </div>
  );
};

const rootElement = document.getElementById('root');
render(<App />, rootElement);
