import axios from 'axios'
import { useEffect, useState } from 'react';

const Positions = () => {
  const [positions, setPositions] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/allPositions")
    .then((res)=>{
      setPositions(res.data)
    })
  } , []);
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Day P&L</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((position) => {
              const currVal = (
                position.price * position.qty
              ).toFixed(2);

              const pnl = (
                position.price * position.qty -
                position.avg * position.qty
              ).toFixed(2);

              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";

              const dayClass =
                position.dayPnl >= 0 ? "profit" : "loss";

              return (
                <tr key={position.name}>
                  <td>{position.product}</td>
                  <td>{position.name}</td>
                  <td>{position.qty}</td>
                  <td>{position.avg}</td>
                  <td>{position.price}</td>
                  <td>{currVal}</td>

                  <td className={profClass}>
                    {pnl}
                  </td>

                  <td className={dayClass}>
                    {position.dayPnl >= 0 ? "+" : ""}
                    {position.dayPnl.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;