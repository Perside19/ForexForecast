import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import down from '../../assets/down-arrow.svg'
import up from '../../assets/up-arrow.svg'
import { Link } from 'react-router-dom';

const coinsData = [
  {
    name: 'USD/EUR',
    imgSrc: ' ',
    change: '-9.05%',
    changeClass: 'text-red-500',
    changeIcon: down,
    chartData: [12, 19, 3, 5, 2, 3, 10],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  {
    name: 'JPY/EUR',
    imgSrc: ' ',
    change: '+4.25%',
    changeClass: 'text-green-500',
    changeIcon: up,
    chartData: [15, 18, 6, 8, 3, 5, 13],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  {
    name: 'GBP/EUR',
    imgSrc: ' ',
    change: '+2.25%',
    changeClass: 'text-green-500',
    changeIcon: up,
    chartData: [9, 14, 5, 7, 2, 4, 11],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  {
    name: 'CHF/EUR',
    imgSrc: 'images/coins/btcc.png',
    change: '-4.05%',
    changeClass: 'text-red-500',
    changeIcon: down,
    chartData: [10, 16, 4, 6, 3, 5, 12],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  {
    name: 'CAD/EUR',
    imgSrc: ' ',
    change: '-12.05%',
    changeClass: 'text-red-500',
    changeIcon: down,
    chartData: [11, 17, 7, 9, 4, 6, 15],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  {
    name: 'TRY/EUR',
    imgSrc: ' ',
    change: '+6.67%',
    changeClass: 'text-green-500',
    changeIcon: up,
    chartData: [8, 13, 2, 4, 1, 3, 9],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  {
    name: 'USD/TRY',
    imgSrc: ' ',
    change: '-3.45%',
    changeClass: 'text-red-500',
    changeIcon: down,
    chartData: [13, 18, 6, 8, 3, 5, 14],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  {
    name: 'USD/JPY',
    imgSrc: ' ',
    change: '+8.05%',
    changeClass: 'text-green-500',
    changeIcon: up,
    chartData: [7, 12, 1, 3, 2, 4, 8],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
];

const CoinCard = ({ coin }) => {
  useEffect(() => {
    const chartId = `chart-${coin.name}`;
    const canvas = document.getElementById(chartId);
    let chartInstance = Chart.getChart(chartId); // Vérifie s'il y a un graphique existant

    if (chartInstance) {
      chartInstance.destroy(); // Détruit le graphique existant avant de créer un nouveau
    }

    const ctx = canvas.getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: coin.chartLabels,
        datasets: [
          {
            data: coin.chartData,
            borderColor: coin.change.startsWith('+') ? 'green' : 'red',
            fill: false,
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          line: {
            borderWidth: 2,
          },
        },
      },
    });
  }, [coin]);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className="bg-back-blue rounded-lg p-4 mt-4">
        <h4 className="text-white text-lg h-full flex items-center mb-4">
          <img src={coin.imgSrc} alt="logo" className="mr-2" />
          {coin.name}
        </h4>
        <div className="crypt-individual-marketcap mb-4">
          <canvas id={`chart-${coin.name}`}></canvas>
        </div>
        <div className="text-center">
          <h5 className={`text-xl ${coin.changeClass} mb-2`}>
            {coin.change}
            <img src={coin.changeIcon} width="15" alt="change icon" className="inline ml-1" />
          </h5>
          <h4 className="text-white text-2xl mb-2">{coin.marketCap}</h4>
          <p className="text-gray-400">
            <Link to='/'><b className='uppercase'>Obtenir une prédiction</b></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const MarketCap = () => (
  <div className='bg-white'>
    <p className="text-center uppercase font-bold pt-4 lg:pt-28 "> Marché des changes / </p>
    <h1 className="text-center text-2xl lg:text-5xl uppercase font-bold pt-4 mb-8 "> Vue d'ensemble </h1>
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -m-2">
        {coinsData.map((coin, index) => (
          <CoinCard key={index} coin={coin} />
        ))}
      </div>
    </div>
  </div>
  
);

export default MarketCap;
