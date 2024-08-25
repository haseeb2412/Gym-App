import { useState } from 'react'
import './App.css'
import { ToastContainer,toast} from "react-toastify"
import {BrowserRouter} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"
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
