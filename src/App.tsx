import { useState } from 'react'
import Header from './Components/Home/Header'
import Home from './Components/Home/Home'
import Login from './Components/Authentification/Login'
import Register from './Components/Authentification/Register'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Footer from './Components/Home/Footer'
import Overview from './Components/Overview/Overview'
import Forgot from './Components/Authentification/Forgot'
import Change from './Components/TauxChange/Change'
// import LineGraph from './Components/Overview/LineGraph'
import MarketCap from './Components/Marketcap/MarketCap'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="bg-cover bg-center bg-back-content">
        <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Inscription' element={<Register/>} />
            <Route path='/Connexion' element={<Login/>} />
            <Route path='/Forgot' element={<Forgot/>} />
            <Route path='/Taux_de_change' element={<Change/>} />
            <Route path='/Vue_d_ensemble' element={<Overview/>} />
            <Route path='/MarketCap' element={<MarketCap/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            {/* <Route path='/graphe' element={<LineGraph/>} /> */}
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
