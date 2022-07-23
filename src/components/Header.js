import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { aunthenticationsactions } from '../Store/Index';

const Header = () => {

  const logout=useSelector(state=>state.aunthentication.aunthentication)
  const dispatch=useDispatch();

  const logouthandler=(event)=>{
event.preventDefault();
    dispatch(aunthenticationsactions.isloggedout());
  }
  return (
    
 <header className={classes.header}>
      <h1>Redux Auth</h1>
     {logout&& <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logouthandler}>Logout</button>
          </li>
        </ul>
      </nav>} 
    </header>
  );
};

export default Header;
