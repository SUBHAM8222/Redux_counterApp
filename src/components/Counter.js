import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch=useDispatch();

  const counter=useSelector(state=>state.counter);
  const toggleCounterHandler = () => {};

  const incrementhandler=()=>{
    dispatch({type:'increment'})

  }
  const decrementhandler=()=>{
    dispatch({type:'decrement'})
  }
  const incrementhandlerby5=()=>{
    dispatch({type:'incrementby5'})

  }
  const decrementhandlerby5=()=>{
    dispatch({type:'decrementby5'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementhandler}>INCREMENT</button>
        <button onClick={decrementhandler}>DECREMENT</button>
        <button onClick={incrementhandlerby5}>INCREMENTby5</button>
        <button onClick={decrementhandlerby5}>DECREMENTby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
