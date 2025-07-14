import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1 className='main-header'>Redux Counter</h1>
      <h2 className='counter'>Count is {count}</h2>
      <button className = 'buttons' onClick={() => dispatch(increment())}> + Increment</button>
      <button className = 'buttons' onClick={() => dispatch(decrement())}> - Decrement</button>
      <button className = 'buttons' onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
