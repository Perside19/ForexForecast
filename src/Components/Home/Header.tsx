import { useState } from 'react'
import { NavLink , Link} from "react-router-dom";
import logo from '../../assets/logo.gif'
import HamburgerMenu from './MenuHamburger';

function Header() {
  return (
    <>
      <header className="top-0 fixed w-screen h-sreen overflow-hidden">
        <div className=" flex flex-row items-center justify-between p-4 lg:px-8 bg-back-blue text-white">
          <div className=" flex items-center"> 
            <Link to="/"><img src={logo} alt="logo" className=" h-8 w-1/2 lg:w-2/3 "/></Link>
          </div>
          <nav className="lg:text-base"> 
            <ul className="hidden lg:flex lg:mt-4 space-x-6"> 
              <li className=" hover:text-blue-300 active:underline text-sm cursor-pointer uppercase "> Echanges </li>
              <NavLink className={(navData) => navData.isActive ? 'text-blue-300' : 'text-white'} to='/MarketCap'>
                <li className=" hover:text-blue-300 active:underline text-sm active:underline cursor-pointer uppercase ">
                  Marchés 
                </li>
              </NavLink> 
              <NavLink className={(navData) => navData.isActive ? 'text-blue-300' : 'text-white'} to='/Vue_d_ensemble'>
                <li className=" hover:text-blue-300 active:underline text-sm active:underline cursor-pointer uppercase ">
                    Vue d'ensemble 
                </li>
              </NavLink> 
              <li className=" hover:text-blue-300 active:underline text-sm cursor-pointer uppercase "> Mes prédictions </li>
              <NavLink className={(navData) => navData.isActive ? 'text-blue-300' : 'text-white'} to='/Taux_de_change'>
                <li className=" hover:text-blue-300 active:underline text-sm active:underline cursor-pointer uppercase ">
                    Taux de changes 
                </li>
              </NavLink> 
            </ul>
          </nav>
          <div className=" flex "> 
            <Link className=" bg-blue-900 hover:bg-blue-700 text-white font-bold p-1 md:py-2 md:px-4 rounded " to='/Connexion'> Connexion </Link>
            <Link className=" bg-blue-900 hover:bg-blue-700 text-white font-bold p-1 md:py-2 md:px-4 rounded ml-2 " to='/Inscription'> Inscription </Link>
          </div>
          <HamburgerMenu/>
        </div> 
      </header>
    </>
  )
}

export default Header
