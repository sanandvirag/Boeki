import Partner from "./Partner";

function Universe() {
  return ( 
    <div className="container">
      <div className="row">
        <div className="text-center">
          <h4 className="mb-4">The Boeki Universe</h4>
          <p className="mb-5">Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="row text-center p-5">
          <div className="col-4">
            <Partner img_link={"/zerodhaFundhouse.png"} description={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."}></Partner>
            <Partner img_link={"/streakLogo.png"} description={"Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."}></Partner>
          </div>
          <div className="col-4">
            <Partner img_link={"/sensibullLogo.svg"} description={"Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."}></Partner>
            <Partner img_link={"/smallcaseLogo.png"} description={"System trading platform that allows you to create and backtest strategies without coding."}></Partner>
          </div>
          <div className="col-4">
            <Partner img_link={"/tijori.svg"} description={"Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."}></Partner>
            <Partner img_link={"/dittoLogo.png"} 
              description={"Personalized advice on life and health insurance. No spamand no mis-selling."}>
            </Partner>
          </div>
        </div>
        <button className="btn signup-btn" style={{width:"16%", margin:"0 auto"}}>Sign Up for free</button>
      </div>
    </div>
  );
}

export default Universe;