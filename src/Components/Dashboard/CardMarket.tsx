import { MarcheList } from "../Overview/MarcheList";

export default function CardMarket() {
  return (
    <>
      <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className=" w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Liste des marchés
              </h3>
            </div>
            <div className=" w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button className="bg-green-800 text-white text-xs font-bold uppercase p-2 rounded m-1" type="button" > Ajouter </button>
              <button className="bg-blue-800 text-white text-xs font-bold uppercase p-2 rounded m-1" type="button" > Voir tout </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  symbol
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  nom
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"> action</th>
              </tr>
            </thead>
            {MarcheList.map((item) => ( 
              <tbody>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    <img src={item.src1} className="rounded w-1/4 ml-4"/>
                    <img src={item.src2} className="rounded w-1/4 -mt-4"/>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <button className="bg-green-800 text-white text-xs font-bold uppercase p-2 rounded m-1" type="button"> modifier </button>
                      <button className="bg-red-800 text-white text-xs font-bold uppercase p-2 rounded m-1" type="button"> supprimer </button>
                    </div>
                  </td>
                </tr>
              </tbody>
				    ))}
          </table>
        </div>
      </div>
    </>
  );
}
