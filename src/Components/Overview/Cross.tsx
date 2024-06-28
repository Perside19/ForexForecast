import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function Cross() {
    const [rates, setRates] = useState<Record<string,number>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [hoveredCol, setHoveredCol] = useState<number | null>(null);

    const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'NZD', 'CHF', 'JPY', 'HKD', 'SGD', 'CNY'];
    const base = 'USD';

    useEffect(() => {
        const fetchRates = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${base}`);
                setRates(response.data.rates);
                setLoading(false);
                setError(null)
            } catch (error) {
                setLoading(false);
                setError('Erreur lors de la recuperation des taux de changes.');
                console.error('Error fetching exchange rates:', error);
            }
        };
        fetchRates();
    }, [base]);

    return (
        <div className='w-screen'>
            <div className=" flex flex-col justify-center items-center">
                {loading ? ( <p className='text-green-500'>Chargement des taux de change...</p> ) : error ? (
                    <p className='text-red-500'>{error}</p>
                ) : (
                    <div className="overflow-x-auto">
                        <div className="overflow-x-auto">
                        <table className="table-auto bg-white shadow-md rounded-lg w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 border"></th>
                                    {currencies.map((currency, index) => (
                                        <th
                                            key={currency}
                                            className={`px-6 py-3 border ${hoveredCol === index ? 'bg-blue-100' : ''}`}
                                        >
                                            {currency}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currencies.map((rowCurrency, rowIndex) => (
                                    <tr key={rowCurrency}>
                                        <td
                                            className={`px-6 py-3 border ${hoveredRow === rowIndex ? 'bg-blue-100' : ''} `}
                                            onMouseEnter={() => setHoveredRow(rowIndex)}
                                            onMouseLeave={() => setHoveredRow(null)}
                                        >
                                            {rowCurrency}
                                        </td>
                                        {currencies.map((colCurrency, colIndex) => (
                                            <td
                                                key={colCurrency}
                                                className={`px-6 py-3 border ${rowCurrency === colCurrency ? 'bg-cyan-100' : ''}  `}
                                                onMouseEnter={() => {
                                                    setHoveredRow(rowIndex);
                                                    setHoveredCol(colIndex);
                                                }}
                                                onMouseLeave={() => {
                                                    setHoveredRow(null);
                                                    setHoveredCol(null);
                                                }}
                                            >
                                                {rowCurrency === colCurrency ? '' : (rates[colCurrency] / rates[rowCurrency]).toFixed(6)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cross
