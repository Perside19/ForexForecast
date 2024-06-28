import { useState } from 'react'
import phone from '../../assets/phonedata.gif'

function Content() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-sreen pt-20 lg:pt-28' >
      <div className=" flex flex-col sm:flex-row items-center justify-between p-4 text-white lg:px-36 ">
        <div className=" mr-2 sm:w-1/2"> 
          <h1 className=" text-white text-3xl lg:text-6xl py-1 uppercase font-bold my-2 lg:my-8"> Obtenez des prédictions sur les marchés de devises </h1>
          <p className=" text-white text-xl lg:text-2xl my-2 lg:my-8 "> Nous vous offons la possiblité d'investir en ayant une prévision sûre à 96%. </p>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white text-xl  lg:text-2xl py-1 p-4 rounded bottom-0 "> Obtenir mes prévisions &gt;</button>
        </div>
        <div className=" flex justify-end w-1/3 mt-2 sm:mt-0 sm:w-1/2"> 
          <img src={phone} alt="prevision" className="w-10/11"/>
        </div>
      </div>
      <div className="text-white lg:px-36">
        <h1 className=" text-white text-center text-2xl lg:text-5xl uppercase font-bold my-4 lg:my-12"> Comment ça marche ? </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-between p-4 ">
          <div className=" items-center bg-blue-500 bg-opacity-20 mx-4 rounded p-4"> 
            <h3 className=" text-white text-2xl uppercase mb-2"> Connectez vous </h3>
            <p className=" text-white text-xl flex my-2"> Créer vous un compte utilisateur </p>
          </div>
          <div className=" items-center bg-blue-500 bg-opacity-20 mx-4 rounded p-4"> 
            <h3 className=" text-white text-2xl uppercase mb-2 "> Entrez vous informations </h3>
            <p className=" text-white text-xl flex my-2 "> Entrez les informations sur vos investissements et marchés </p>
          </div>
          <div className=" items-center bg-blue-500 bg-opacity-20 mx-4 rounded p-4"> 
            <h3 className=" text-white text-2xl uppercase mb-2 "> Obtenez des prévisions </h3>
            <p className=" text-white text-xl flex my-2 "> Le système se chargera de vous apporter des prévisions propre à vos données </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
