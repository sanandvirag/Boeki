function Hero() {
  return (
    <>
      <div className="container hero">
        <div className="row text-center">
          <img style={{width:"70%", margin:"0 auto"}} src="/homeHero.png" alt="" className="mb-2"/>
          <h2>Inverst in everything</h2>
          <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className="btn signup-btn" style={{width:"16%", margin:"0 auto"}}>Sign Up for free</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
