function Hero() {
  return ( 
    <div className="container hero">
        <div className="text-center">
          <h3>Charges</h3>
          <h5 style={{color:"rgb(155, 155, 155)"}}>List of all charges and taxes</h5>
        </div>
        <div className="row p-5 ms-5 me-5">
          <div className="col p-4 text-center">
            <img src="/pricing0.svg" alt=""/>
            <h3>Free equity delivery</h3>
            <p className="mt-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col p-4 text-center">
            <img src="/intradayTrades.svg" alt=""/>
            <h3>Intraday and F&O trades</h3>
            <p className="mt-5">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className="col p-4 text-center">
            <img src="/pricingMF.svg" alt=""/>
            <h3>Free direct MF</h3>
            <p className="mt-5">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
          </div>
        </div>
    </div>
  );
}

export default Hero;