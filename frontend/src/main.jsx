import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/about' element={<AboutPage></AboutPage>}></Route>
    <Route path='/products' element={<ProductPage></ProductPage>}></Route>
    <Route path='/pricing' element={<PricingPage></PricingPage>}></Route>
    <Route path='/support' element={<SupportPage></SupportPage>}></Route>
  </Routes>
  </BrowserRouter>
)
