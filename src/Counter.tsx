import React from 'react';

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterComponent: React.FC<CounterProps> = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <button onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

const Counter = React.memo(CounterComponent);

export default Counter;
