import { useState } from "react";
import {Link} from 'react-router-dom';
import '../index.css'

const Menu = () => {
  const [option, setOption] = useState(0); 
  const [profile, setProfile] = useState(false);

  function handleMenuClick(index){
    setOption(index);
  }
  // function handleProfileDropdown(){
  //   setProfile(!profile);
  // }
  
  const menuClass = "menu";
  const active = "menu selected";

  return (
    <div className="menu-container">
      <img src="/boeki-icon.svg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>{handleMenuClick(0)}}>
              <p className={option === 0 ? active : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>{handleMenuClick(1)}}>
              <p className={option === 1 ? active : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>{handleMenuClick(2)}}>
              <p className={option === 2 ? active : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>{handleMenuClick(3)}}>
              <p className={option === 3 ? active : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>{handleMenuClick(4)}}>
              <p className={option === 4 ? active : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>{handleMenuClick(5)}}>
              <p className={option === 5 ? active : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;