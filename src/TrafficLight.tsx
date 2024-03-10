import React from 'react';

interface TrafficLightProps {
  state: {
    value: number;
    label: string;
  };
}

const TrafficLight: React.FC<TrafficLightProps> = ({ state }) => {
  const getColor = (value: number) => {
    switch (value % 3) {
      case 0: return 'red';
      case 1: return 'yellow';
      case 2: return 'green';
      default: return 'black';
    }
  };

  return (
    <div className="traffic-light">
      <div style={{ backgroundColor: getColor(state.value), width: '50px', height: '50px' }}></div>
      <p>{state.label}</p>
    </div>
  );
};

export default TrafficLight;
