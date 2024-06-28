import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container text-white mx-auto px-4 w-screen h-sreen py-24">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-1/3 px-4">
            <div className=" flex lg:py-8 flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="  w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Nom
                    </label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Entrez votre nom" />
                  </div>
                  <div className="  w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password" >
                      Email
                    </label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Entrez votre adresse mail" />
                  </div>
                  <div className="  w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password" >
                      Mot de passe
                    </label>
                    <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Entrez votre mot de passe" />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Se souvenir de moi
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <Link
                      className=" w-full bg-green-800 text-white hover:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow mr-1 mb-1 "
                      to='/'
                    >
                      Se Connecter
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6  ">
              <div className="w-1/2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200 text-lg"
                >
                  <Link to="/Forgot" className="text-blueGray-200">
                    <p>Mot de passe oublé?</p>
                  </Link>
                  
                </a>
              </div>
              <div className="w-1/2 text-right text-lg">
                <Link to="/Inscription" className="text-blueGray-200">
                  <p>Creer un nouveau compte</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
