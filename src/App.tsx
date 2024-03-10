import React, { useState, useCallback } from 'react';
import Counter from './Counter';
import TrafficLight from './TrafficLight';

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const incrementCounter1 = useCallback(() => {
    setCounter1(prevState => prevState + 1);
    setTotalClicks(prevState => prevState + 1);
  }, []);

  const decrementCounter1 = useCallback(() => {
    setCounter1(prevState => prevState - 1);
    setTotalClicks(prevState => prevState - 1);
  }, []);

  const incrementCounter2 = useCallback(() => {
    setCounter2(prevState => prevState + 1);
    setTotalClicks(prevState => prevState + 1);
  }, []);

  const decrementCounter2 = useCallback(() => {
    setCounter2(prevState => prevState - 1);
    setTotalClicks(prevState => prevState - 1);
  }, []);

  return (
    <div className="App">
      <Counter value={counter1} onIncrement={incrementCounter1} onDecrement={decrementCounter1} />
      <Counter value={counter2} onIncrement={incrementCounter2} onDecrement={decrementCounter2} />
      <div>Total clicks: {totalClicks}</div>
      <TrafficLight state={{ value: totalClicks, label: 'Traffic State' }} />
    </div>
  );
};

export default App;
