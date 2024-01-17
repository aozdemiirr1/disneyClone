import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Home />
      <Footer />
    </>
  )
}

export default App
