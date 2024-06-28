import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function Change() {
    const [rates, setRates] = useState<Record<string,number>>({});
    const [base, setBase] = useState('USD');
    const [target, setTarget] = useState('EUR');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
                setError('Erreur lors de la récupération des taux de change.');
                console.error('Error fetching exchange rates:', error);
            }
        };
        fetchRates();
    }, [base]);

    const rate = rates[target];

    return (
        <div className='bg-white h-screen w-screen'>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <p className="text-center uppercase font-bold pt-4 lg:pt-12 "> Marché des changes / </p>
                <h1 className="text-center text-2xl lg:text-5xl uppercase font-bold pt-4 mb-8 "> Taux de change</h1>
                <div className='flex items-center space-x-2'>
                    <div className="mb-4">
                        <select id="base" value={base} onChange={(e) => setBase(e.target.value)} className="px-4 py-2 border rounded-lg shadow-sm w-[100px]" >
                            {Object.keys(rates).map((currency) => ( <option key={currency} value={currency}> {currency} </option> ))}
                        </select>
                    </div>
                    <label className="block text-lg font-medium mb-2">vers</label>
                    <div className="mb-4">
                        <select id="target" value={target} onChange={(e) => setTarget(e.target.value)} className="px-4 py-2 border rounded-lg shadow-sm w-[100px]" >
                            {Object.keys(rates).map((currency) => ( <option key={currency} value={currency}> {currency} </option> ))}
                        </select>
                    </div>
                </div>
                {loading ? ( <p className='text-green-500'>Chargement des taux de change...</p> ) : error ? (
                    <p className='text-red-500'>{error}</p>
                ) : (
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <p className='text-lg'> {`1 ${base} = ${rate} ${target} `} </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Change
