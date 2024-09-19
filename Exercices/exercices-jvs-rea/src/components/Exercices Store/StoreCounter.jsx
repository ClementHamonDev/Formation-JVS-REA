import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';


function StoreCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>Count: {count}</div>
      <button style={{ padding: '10px 15px', margin: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => dispatch(increment())}>Increment</button>
      <button style={{ padding: '10px 15px', margin: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => dispatch(decrement())}>Decrement</button>
      <button style={{ padding: '10px 15px', margin: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => dispatch(reset())}>Reset</button>
      <button style={{ padding: '10px 15px', margin: '5px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default StoreCounter;
