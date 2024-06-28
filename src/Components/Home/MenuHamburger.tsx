import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:absolute">
      <button onClick={toggleMenu} className="focus:outline-none md:hidden">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} fixed right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl md:hidden`}>
        <ul>
            <li className=" block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer uppercase "> Echanges </li>
            <li className=" block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer uppercase "> Marchés </li>
            <li className=" block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer uppercase "> <Link to='/Vue_d_ensemble'> Vue d'ensemble </Link> </li>
            <li className=" block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer uppercase "> Mes prédictions </li>
        </ul>   
      </div>
    </div>
  );
};

export default HamburgerMenu;
