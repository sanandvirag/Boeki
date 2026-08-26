import Navbar from "../Navbar";
import Hero from "./Hero";
import Product from "./Product";
import Universe from "./Universe";
import Footer from "../Footer";


function ProductPage() {
  return ( 
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Product img_link={"/kite.png"} 
        product={"Kite"} 
        descrption={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} 
        linkNum={2} 
        links={["Try Demo","Learn More"]}>
      </Product>
      <Product
        img_link={"/console.png"}
        product={"Console"}
        descrption={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
        linkNum={1}
        links={["Learn More"]}
      >
      </Product>
      <Product 
        img_link={"/coin.png"} 
        product={"Coin"} 
        descrption={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} 
        linkNum={1} 
        links={["Coin"]}>
      </Product>
      <Product
        img_link={"/kiteconnect.png"}
        product={"Kite Connect API"}
        descrption={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
        linkNum={1}
        links={["Kite Connect"]}
      >
      </Product>
      <Product 
        img_link={"/varsity.png"}
        product={"Varsity mobile"}
        descrption={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
        linkNum={0}
        links={[]}
      >
      </Product>
      <Universe></Universe>
      <Footer></Footer>
    </>
  );
}

export default ProductPage;