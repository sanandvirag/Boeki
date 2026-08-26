import {Tooltip, Grow} from "@mui/material"
import { watchlist } from "../../data/data";
import { useState } from "react";
import {KeyboardArrowDown, KeyboardArrowUp, BarChartOutlined, MoreHoriz} from "@mui/icons-material"


function WatchListActions(){
  return(
    <span className="action">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
          <button className="action"><BarChartOutlined className="icon"></BarChartOutlined></button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <MoreHoriz></MoreHoriz>
        </Tooltip>
      </span>
    </span>
  );
}

function WatchListItems({stock}) {
  const [showOptions, setShowOptions] = useState(false);
  function handleMouseEnter(){
    setShowOptions(true);
  }
  function handleMouseLeave(){
    setShowOptions(false);
  }
  return ( 
    <>
      <li 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="item">
            <span className={stock.isDown ? "down" : "up"}>{stock.percent}</span>
            {stock.isDown ? 
              <KeyboardArrowDown className="down"></KeyboardArrowDown> :
              <KeyboardArrowUp className="up"></KeyboardArrowUp>
            }
            <span className={stock.isDown ? "down" : "up"}>{stock.price}</span>
          </div>
        </div>
        {showOptions && <WatchListActions uid={stock.name}></WatchListActions>}
      </li>
    </>
  );
}

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>
      <ul className="list">
        {
          watchlist.map((stock)=>{
            return <WatchListItems stock={stock} key={stock.name}></WatchListItems>
          })  
        }
      </ul>
    </div>
  );
};

export default WatchList;