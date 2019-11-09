/* global document */

import * as React from 'react';
import { render } from 'react-dom';
import Conversation from './components/Conversation';
import TypeTransition from './components/TypeTransition';

import './styles.css';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec. Enim nulla aliquet porttitor lacus luctus. Augue interdum velit euismod in pellentesque massa placerat duis. Odio euismod lacinia at quis risus sed vulputate odio ut. Congue eu consequat ac felis. Nunc mi ipsum faucibus vitae aliquet. Congue nisi vitae suscipit tellus mauris a diam. Diam sollicitudin tempor id eu. Auctor urna nunc id cursus metus aliquam eleifend mi. Tristique magna sit amet purus gravida quis. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero.';

const App = (): React.ReactElement => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (progress < text.length) {
      requestAnimationFrame(() => {
        setProgress(progress + 3);
      });
    }
  }, [progress]);

  return (
    <div className="App">
      <Conversation speaker="Somebody" speakerPosition="left">
        <TypeTransition progress={progress} text={text} />
      </Conversation>
    </div>
  );
};

const rootElement = document.getElementById('root');
render(<App />, rootElement);
