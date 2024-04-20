import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import HeroSection from "./components/Herosection"
import MainFeatures from './components/MainFeatures'
import PublishersSection from './components/PublishersSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <>
    {/* <h1 className=' font-extrabold' > hello world</h1> */}
      <Navbar/>
      <HeroSection/>
      <MainFeatures/>
      <PublishersSection/>
      <TestimonialSection/>
      <Footer/>
      <Register/>
      <Login/>
      <Dashboard/>
    </>
  )
}

export default App
