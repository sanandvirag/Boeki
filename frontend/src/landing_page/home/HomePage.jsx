import Navbar from '../Navbar'
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Awards from './Awards';
import Eduction from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';


function HomePage() {
  return ( 
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Awards></Awards>
      <Stats></Stats>
      <Pricing></Pricing>
      <Eduction></Eduction>
      <OpenAccount></OpenAccount>
      <Footer></Footer>
    </>
  );
}

export default HomePage;