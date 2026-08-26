import CommodityTable from "./CommodityTable.jsx";
import EquityTable from "./EquityTable.jsx";
import CurrencyTable from "./CurrencyTable.jsx";
import './Charges.css';
import { useState } from "react";

function Charges() {
  const [table, setTable] = useState("equity");

  function getTable(value){
    setTable(value);
  }
  return ( 
    <>
      <div className="container text-center">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <button onClick={()=>{getTable("equity")}} value="equity" className={`nav-link ${table === "equity" ? "active" : ""}`}><b>Equity</b></button>
          </li>
          <li className="nav-item">
            <button onClick={()=>{getTable("currency")}} value="currency" className={`nav-link ${table === "currency" ? "active" : ""}`}><b>Currency</b></button>
          </li>
          <li className="nav-item">
            <button onClick={()=>{getTable("commodity")}} value="commodity" className={`nav-link ${table === "commodity" ? "active" : ""}`}><b>Commodity</b></button>
          </li>
        </ul>
        <hr />
        {table === "equity" && <EquityTable />}
        {table === "currency" && <CurrencyTable />}
        {table === "commodity" && <CommodityTable />}
      </div>
      
    </>
  );
}

export default Charges;