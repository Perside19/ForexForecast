import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <>
      <div className="container text-white mx-auto px-4 h-full py-24 h-screen w-screen">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-1/3 px-4">
            <div className="relative flex lg:py-8 flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Email
                    </label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Entrez votre Email" />
                  </div>
                  <div className="text-center mt-6">
                    <Link
                      className="bg-green-800 text-white hover:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow mr-1 mb-1 w-full "
                      to='/'
                    >
                      Recuperer
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
