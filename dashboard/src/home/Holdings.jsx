import { useEffect, useState } from "react";
import axios from "axios"

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/allHoldings")
    .then((res)=>{
      console.log(res.data)
      setHoldings(res.data)
    })
  }, []);

  const totalInvestment = holdings.reduce(
    (total, stock) => total + stock.avg * stock.qty, 0
  );

  const currentValue = holdings.reduce(
    (total, stock) => total + stock.price * stock.qty, 0
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercent = (pnl / totalInvestment) * 100;

  const pnlClass = pnl >= 0 ? "profit" : "loss";
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>
          <tbody>
            {holdings.map((stock) => {
              const currVal = (stock.price * stock.qty).toFixed(2);

              const pnl = (stock.price * stock.qty - stock.avg * stock.qty).toFixed(2);
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const isDayLoss = stock.day[0] === "-";
              const dayClass = isDayLoss ? "loss" : "profit";

              return (
                <tr key={stock.name}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg}</td>
                  <td>{stock.price}</td>
                  <td>{currVal}</td>
                  <td className={profClass}>{pnl}</td>
                  <td>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            ₹{totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            ₹{currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5 className={pnlClass}>
            ₹{pnl.toFixed(2)} ({pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;