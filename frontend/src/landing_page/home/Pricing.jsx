function Pricing() {
  return (  
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="mb-4">Unbeatable pricing</h3>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="">See pricing</a>
          </div>
          <div className="col-2">
            <img src="/pricing0.svg" alt="" />
            <p className="small-text"> Free account opening</p>
          </div>
          <div className="col-2">
            <img src="/pricingEquity.svg" alt="" />
            <p className="small-text">Free equity delivery and direct mutual funds</p>
          </div>
          <div className="col-2">
            <img src="/intradayTrades.svg" alt="" />
            <p className="small-text">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;