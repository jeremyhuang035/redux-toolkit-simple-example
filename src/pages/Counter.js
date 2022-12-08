import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementAsync,
} from '../features/counter/counterSlice';
import { loadData } from '../features/counter/movieSlice';
import './Counter.css';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const { list } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const step = 3;

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="btnContainer">
        <div className="btnContainer-sync">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <button
          className="btn-async"
          onClick={() => dispatch(incrementAsync({ step: step }))}
        >
          IncrementAsync +{step}
        </button>
      </div>

      <div className="listContainer">
        <h4>Movie List</h4>
        <ul>
          {list.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
