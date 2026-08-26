function Awards() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="/largestBroker.svg" alt="" />
          </div>
          <div className="col">
            <div className="row">
              <h2>Largest Stock Broker in India</h2>
              <p className="mb-4">2+ million Boeki clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
              <div className="col mb-5">
                <ul>
                  <li>Future and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col mb-5">
                <ul>
                  <li>Stocks and IPOs</li>
                  <li>Direcct mutual funds</li>
                  <li>Bonds and Government securities</li>
                </ul>
              </div>
              <img src="/pressLogos.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;