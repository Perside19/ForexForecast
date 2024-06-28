import { useState } from 'react'
import carte from '../../assets/carte.png'

function Carte() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" text-white bg-back-blue py-4 lg:py-12">
        <h1 className=" text-white text-center text-2xl lg:text-5xl uppercase font-bold pt-4 lg:pt-12 "> Accéssible partout dans le monde  </h1>
        <div className=" flex sm:flex-row items-center justify-between p-4 lg:px-8">
          <img src={carte} alt="carte" className=" w-2/3 mx-auto"/>
        </div>
      </div>
    </>
  )
}

export default Carte
