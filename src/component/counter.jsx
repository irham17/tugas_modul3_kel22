import React, { useState, useEffect } from 'react';
import '../App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 10) {
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [count]);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const backgroundColor = count >= 10 ? 'green' : 'yellow';

  return (
    <div className="counter-container" style={{ backgroundColor }}>
      <h1>Counter Kelompok 22</h1>
      <h2>Counter: {count}</h2>
      {count >= 10 && <p>Counter mencapai 10!</p>}
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleDecrement}>Kurang</button>
    </div>
  );
};

export default Counter;
