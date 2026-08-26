import './Hero.css'

function Hero() {
  return ( 
    <div className="container hero">
      <div className="row text-center">
        <h3 className="mb-4">Boeki Products</h3>
        <p style={{fontSize:"large"}} className="mb-4">Sleek, modern, and intuitive trading platforms</p>
        <p className="mb-5">Check out our <a href="">investment offerings →</a></p>
        <hr className="my-hr"/>
      </div>
    </div>
  );
}

export default Hero;