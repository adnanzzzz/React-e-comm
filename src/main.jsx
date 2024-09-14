import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './component/common/Header.jsx'
import Footer from './component/common/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Productlisting from './component/product/Productlisting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Productlisting/>
    <Footer/>
  </StrictMode>,
)
