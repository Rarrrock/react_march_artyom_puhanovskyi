import React, {FC, useState} from 'react';
import useToggle from './hooks/useToggle/useToggle';
import usePrevious from './hooks/usePrevious/usePrevious';

const App: FC = () => {
  const [isToggled, toggle] = useToggle();
  const [counter, setCounter] = useState(0);
  const previousCounter = usePrevious(counter);

  return (
      <div>
        <button onClick={toggle}>
          {isToggled ? 'ON' : 'OFF'}
        </button>

        <div>
          <button onClick={() => setCounter(counter + 1)}>
            Increment Counter
          </button>
          <div>Current Counter: {counter}</div>
          <div>Previous Counter: {previousCounter}</div>
        </div>
      </div>
  );
};

export default App;