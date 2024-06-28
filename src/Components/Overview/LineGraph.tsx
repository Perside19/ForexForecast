import { useState } from 'react';
import { candleData } from './DataList';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const CandlestickChart: React.FC = () => {
    const [chartType, setChartType] = useState<'line' | 'candlestick'>('line');

    const toggleChartType = (type: 'line' | 'candlestick') => {
        setChartType(type);
    };

    // Customized component for rendering candlestick
    const renderCandlestick = () => {
        return (
            <LineChart
                width={800}
                height={400}
                data={candleData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {candleData.map((entry, index) => (
                    <CustomCandle key={index} x={index} {...entry} />
                ))}
            </LineChart>
        );
    };

    // Customized candlestick component
    const CustomCandle = ({ x, open, high, low, close }: any) => {
        const isBullish = close >= open;

        const bodyY = isBullish ? open : close;
        const bodyHeight = Math.abs(close - open);
        const lineY = isBullish ? low : high;

        return (
            <>
                <line
                    x1={x}
                    y1={high}
                    x2={x}
                    y2={low}
                    stroke={isBullish ? '#82ca9d' : '#ff0000'}
                    strokeWidth="2"
                />
                <rect
                    x={x - 5}
                    y={bodyY}
                    width="10"
                    height={bodyHeight}
                    fill={isBullish ? '#82ca9d' : '#ff0000'}
                />
                <line
                    x1={x - 5}
                    y1={lineY}
                    x2={x + 5}
                    y2={lineY}
                    stroke={isBullish ? '#82ca9d' : '#ff0000'}
                    strokeWidth="2"
                />
            </>
        );
    };

    return (
        <>
            <div className="w-full h-96">
                <ResponsiveContainer>
                    {chartType === 'line' ? (
                        <LineChart
                            data={candleData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis domain={[0.8, 1.0]} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="close" stroke="#00C49F" />
                        </LineChart>
                    ) : (
                        renderCandlestick()
                    )}
                </ResponsiveContainer>
            </div>
            <div className="p-4">
                <span className="flex justify-end">
                    <button
                        className={`hover:bg-gray-100 ${
                            chartType === 'line' ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => toggleChartType('line')}
                        aria-label="Style de graphique zones"
                        title="Style de graphique zones"
                    >
                        :kn!kn {/* Icône pour le graphique en ligne */}
                    </button>
                    <button
                        className={`hover:bg-gray-100 ${
                            chartType === 'candlestick' ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => toggleChartType('candlestick')}
                        aria-label="Style de graphique bougies"
                        title="Style de graphique bougies"
                    >
                        l!,dzù!l,e!{/* Icône pour le graphique en bougies */}
                    </button>
                </span>
            </div>
        </>
    );
};

export default CandlestickChart;
