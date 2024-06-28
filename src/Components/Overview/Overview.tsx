import Marche from './Marché';
import { MarcheList } from './MarcheList';
import { DeviseList } from './DeviseList';
import Cross from './Cross';

function Overview() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-white pt-20'>
      <div>
        <p className="text-center uppercase font-bold pt-4 lg:pt-12 "> Marché des changes / </p>
        <h1 className="text-center text-2xl lg:text-5xl uppercase font-bold pt-4 mb-8 "> Vue d'ensemble </h1>
        <p className="text-left text-xl uppercase font-bold lg:ml-8 pt-4 lg:pt-12 "> Paires de devises &gt; </p>
        <Marche/>
      </div>
      <div className='flex items-center align-center pt-8 lg:px-8'>
        <div className='w-1/2'>
          <p className="text-left text-xl uppercase font-bold lg:ml-8 pt-4 lg:pt-12 pb-8"> Majeures &gt; </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {MarcheList.map((item) => ( 
              <div key={item.id} className="container">
                <button className="hover:bg-hoverblue w-full bg-white border-solid rounded p-4">
                  <div className=" flex items-center justify-between">
                    <div className=' w-1/5 '>
                      <span className=" ">
                        <img className="rounded-full w-1/2 ml-2" src={item.src1} alt=""/>
                        <img className="rounded-full w-1/2 -mt-5 border border-white border solid" src={item.src2} alt=""/>
                      </span>
                    </div>
                    <div className=' w-4/5 text-left grid'>
                      <a href=" " className=" " data-overflow-tooltip-text="USD vers EUR">
                        <span className=" ">{item.description}</span>
                      </a>
                        <span className=" ">{item.name} </span>
                    </div>
                  </div>
                </button>
              </div>
				    ))}
          </div>
        </div>
        <div className='w-1/2'>
          <p className="text-left text-xl uppercase font-bold lg:ml-8 pt-4 pb-8 lg:pt-12 "> Indices de devises &gt; </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {DeviseList.map((item) => ( 
              <div key={item.id} className="container">
                <button className="hover:bg-hoverblue w-full bg-white border-solid rounded p-4">
                  <div className=" flex items-center justify-between">
                    <div className=' w-1/5 '>
                      <span className=" ">
                        <img className="rounded-full w-2/3" src={item.src} alt=""/>
                      </span>
                    </div>
                    <div className=' w-4/5 text-left grid'>
                      <a href=" " className=" " data-overflow-tooltip-text="USD vers EUR">
                        <span className=" ">{item.nom}</span>
                      </a>
                        <span className=" ">{item.indice} </span>
                    </div>
                  </div>
                </button>
              </div>
				    ))}
          </div>
        </div>
      </div>
      <div className='py-12'>
        <p className="text-left text-xl uppercase font-bold lg:ml-8 p-4 pb-12 "> Taux de cross &gt; </p>
        <Cross/>
      </div>
    </div>
  )
}

export default Overview
