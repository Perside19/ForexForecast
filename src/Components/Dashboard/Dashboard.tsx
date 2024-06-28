
import CardPageVisits from "./CardMarket.js";
import CardSocialTraffic from "./CardDevise.js";

export default function Dashboard() {
  return (
    <div className='pt-32 bg-white'>
      <div className="flex flex-row items-center justify-between mb-28">
        <div className=" p-4 shadow-lg rounded bg-blueGray-700 w-1/4 ml-8 lg:ml-12 ">
          <h2 className="text-blueGray-700 text-xl font-semibold text-center"> Utilisateurs </h2>
          <p className='text-center'>0</p>
        </div>
        <div className="p-4 shadow-lg rounded bg-blueGray-700 w-1/4">
          <h2 className="text-blueGray-700 text-xl font-semibold text-center"> Devises </h2>
          <p className='text-center'>0</p>
        </div>
        <div className="p-4 shadow-lg rounded bg-blueGray-700 w-1/4 mr-8 lg:mr-12">
          <h2 className="text-blueGray-700 text-xl font-semibold text-center"> Marchés </h2>
          <p className='text-center'>0</p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-1/2 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </div>
  );
}
