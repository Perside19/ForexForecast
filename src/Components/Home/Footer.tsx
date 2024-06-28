import { useState } from 'react'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" text-white bg-back-blue bg-opacity-90 p-4 lg:py-12 w-screen h-sreen ">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm lg:text-xl font-semibold py-1 text-center md:text-left">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://www.creative-tim.com?ref=nr-footer-small"
                className="text-white lg:text-xl hover:text-blue-300 text-sm font-semibold py-1"
              >
                uv projet
              </a>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-small"
                  className="text-white hover:text-blue-300 lg:text-xl text-sm font-semibold block py-1 px-3"
                >
                  ForexForecast
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/presentation?ref=nr-footer-small"
                  className="text-white hover:text-blue-300 lg:text-xl text-sm font-semibold block py-1 px-3"
                >
                  A propos de nous
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nr-footer-small"
                  className="text-white hover:text-blue-300 lg:text-xl text-sm font-semibold block py-1 px-3"
                >
                  Nous contacter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer-small"
                  className="text-white hover:text-blue-300 lg:text-xl text-sm font-semibold block py-1 px-3"
                >
                  Suivez nous
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
