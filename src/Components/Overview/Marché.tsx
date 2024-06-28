import { useRef } from 'react';
import { MarcheList } from './MarcheList';
import { data } from './DataList';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'chart.js/auto';

const Marche : React.FC = () => {

const listRef = useRef<HTMLDivElement>(null);
const scroll = (direction: 'left' | 'right') => {
    if (listRef.current) {
        if (direction === 'left') {
            listRef.current.scrollLeft -= 200;
        } else {
            listRef.current.scrollLeft += 200;
        }
    }
};

  return (
    <>
       <div className=" flex items-center">
            <button className="absolute left-0 z-10 p-2 rounded-full bg-white text-2xl shadow mx-2 w-12 h-12" onClick={() => scroll('left')} > &lt; </button>
            <div className="flex overflow-x-auto scrollbar-hide" ref={listRef} style={{ scrollBehavior: 'smooth' }} >
                {MarcheList.map((item) => ( 
                    <div key={item.id} className="container p-2 md:w-1/2 lg:w-1/4 lg:ml-8 flex-shrink-0">
                        <button className="hover:bg-hoverblue bg-white w-full border-solid rounded-full p-4" aria-label="Afficher le graphique de USD vers EUR">
                            <div className=" flex items-center justify-between">
                                <div className=' w-1/6 block '>
                                    <span className=" ">
                                        <img className="rounded-full w-1/2 ml-2" src={item.src1} alt=""/>
                                        <img className="rounded-full w-1/2 -mt-3 border border-white border solid" src={item.src2} alt=""/>
                                    </span>
                                </div>
                                <div className=' w-5/6 block text-left'>
                                    <a href=" " className=" " data-overflow-tooltip-text="USD vers EUR">
                                        <span className=" ">{item.description}</span>
                                    </a>
                                    <div className=" ">
                                        <span className=" ">{item.valeur} </span>
                                        <span className=" ">{item.pourcentage}</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
				))}
            </div>
            <button className="absolute right-0 z-10 p-2 rounded-full bg-white text-2xl shadow mx-2 w-12 h-12" onClick={() => scroll('right')} > &gt; </button>
        </div>
        <div>
            <div className="w-full h-96 ">
                <ResponsiveContainer>
                    <LineChart
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0.85, 1.0]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#00C49F" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className=" p-4">
                <span className=" flex">
                    <span className=' flex justify-start w-1/2'>
                        <span className=" shadow mr-4 hover:bg-gray-100 w-10 p-2" >
                            <a href=" " target="_blank" className=" " title="Obtenez les données sur un jour"> 
                                1J
                            </a>
                        </span>
                        <span className=" shadow mr-4 hover:bg-gray-100 w-10 p-2" >
                            <a href=" " target="_blank" className=" " title="Obtenez les données sur un mois"> 
                                1M
                            </a>
                        </span>
                        <span className=" shadow mr-4 hover:bg-gray-100 w-10 p-2" >
                            <a href=" " target="_blank" className=" " title="Obtenez les données sur trois mois"> 
                                3M
                            </a>
                        </span>
                        <span className=" shadow mr-4 hover:bg-gray-100 w-10 p-2" >
                            <a href=" " target="_blank" className=" " title="Obtenez les données sur une année"> 
                                1A
                            </a>
                        </span>
                        <span className=" shadow mr-4 hover:bg-gray-100 w-10 p-2" >
                            <a href=" " target="_blank" className=" " title="Obtenez les données sur cinq année"> 
                                5A
                            </a>
                        </span>
                    </span>
                    <span className=' flex justify-end w-1/2'>
                        <span className=" shadow mr-4 hover:bg-gray-100 p-2" >
                            <a href=" " aria-label="Obtenez le widget" target="_blank" className=" " title="Obtenez le widget"> 
                                <span className="  " role="img" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                        <path fill="currentColor" d="M15.66 5.77c.4.08.66.48.57.89l-3 14a.75.75 0 0 1-1.46-.32l3-14c.08-.4.48-.66.89-.57ZM18 7.94a.75.75 0 0 1 1.06.06l4.5 5c.25.28.25.72 0 1l-4.5 5a.75.75 0 0 1-1.12-1L22 13.5 17.94 9A.75.75 0 0 1 18 7.94ZM10.06 9a.75.75 0 0 0-1.12-1l-4.5 5a.75.75 0 0 0 0 1l4.5 5a.75.75 0 1 0 1.12-1L6 13.5 10.06 9Z"></path>
                                    </svg>
                                </span>
                            </a>
                        </span>
                        <span className='shadow mr-4 p-2'>
                            <button className='hover:bg-gray-100' aria-label="Style de graphique zones" title="Style de graphique zones">
                                <span className=" " role="img" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                        <path fill="currentColor" d="M21.88 7.35c.8-.76 2.12-.2 2.12.9v11.5c0 .7-.56 1.25-1.25 1.25H5.25C4.56 21 4 20.44 4 19.76v-5.48c0-.38.18-.74.48-.98l5.24-4.08c.46-.36 1.11-.35 1.56.02l4.68 3.8 5.92-5.69Zm.62 1.48-5.98 5.74a.75.75 0 0 1-1 .04l-5.03-4.1-4.99 3.9v5.1h17V8.83Z"></path>
                                    </svg>
                                </span>
                            </button>
                            <button className='hover:bg-gray-100' aria-label="Style de graphique bougies" title="Style de graphique bougies">
                                <span className="  " role="img" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                        <path fill="currentColor" d="M12 7h-.75V4h-1.5v3H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h.75v3h1.5v-3H12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM9.5 19.5v-11h2v11h-2Zm8-3v-5h2v5h-2Zm.24-6.5H17a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.75v3h1.5v-3H20a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-.76V7h-1.5v3Z"></path>
                                    </svg>
                                </span>
                            </button>
                        </span>
                        <span className=" shadow hover:bg-gray-100 mr-4 p-2">
                            <a href=" " target="_blank" aria-label="Lancer l'affichage du graphique complet" title="Lancer l'affichage du graphique complet">
                                <span className="  " role="img" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                        <path fill="currentColor" d="M17 5.5h3A2.5 2.5 0 0 1 22.5 8v3H24V8a4 4 0 0 0-4-4h-3v1.5ZM11 5.5V4H8a4 4 0 0 0-4 4v3h1.5V8A2.5 2.5 0 0 1 8 5.5h3ZM5.5 17H4v3a4 4 0 0 0 4 4h3v-1.5H8A2.5 2.5 0 0 1 5.5 20v-3ZM17 22.5V24h3a4 4 0 0 0 4-4v-3h-1.5v3a2.5 2.5 0 0 1-2.5 2.5h-3Z"></path>
                                    </svg>
                                </span>
                            </a>
                        </span>
                    </span>
                    
                </span>
            </div>
        </div>
        
    </>
  )
}

export default Marche
