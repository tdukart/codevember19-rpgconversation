/* global document */

import * as React from 'react';
import { render } from 'react-dom';
import Conversation from './components/Conversation';

import './styles.css';

const App = (): React.ReactElement => (
  <div className="App">
    <Conversation speaker="Somebody" speakerPosition="left">
      Hello world!
    </Conversation>
  </div>
);

const rootElement = document.getElementById('root');
render(<App />, rootElement);
