import { useState } from 'react'
import './App.css'
import { ToastContainer,toast} from "react-toastify"
import {BrowserRouter} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkOutSession from "./components/WorkOutSession"
import Gallery from "./components/Gallery"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import BMICalculator from "./components/BMICalculator"
import Footer from "./components/Footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Hero/>
      <WorkOutSession/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculator/>
      <Footer/>
      <ToastContainer theme='dark' position='top-center'/>

     </BrowserRouter>
    </>
  )
}

export default App
