import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../Store/Index';

const Counter = () => {

  const dispatch=useDispatch();

  const counter=useSelector(state=>state.counter.counter);
  const token=useSelector(state=>state.counter.showCounter)
  const toggleCounterHandler = () => {

    dispatch(counterActions.toggleCounter());
  }
  
  ;

  const incrementhandler=()=>{
    dispatch(counterActions.increment())

  }
  const decrementhandler=()=>{
    dispatch(counterActions.decrement())
  }
  const incrementhandlerby5=()=>{
    dispatch(counterActions.incrementby5(5))

  }
  const decrementhandlerby5=()=>{
    dispatch(counterActions.decrementby5(5))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {token&& <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementhandler}>INCREMENT</button>
        <button onClick={decrementhandler}>DECREMENT</button>
        <button onClick={incrementhandlerby5}>INCREMENTby 5</button>
        <button onClick={decrementhandlerby5}>DECREMENTby 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
