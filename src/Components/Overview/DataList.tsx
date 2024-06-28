export const data = [
    { date: '2020-07', value: 0.85 },
    { date: '2020-10', value: 0.1 },
    { date: '2021-05', value: 0.93 },
    { date: '2021-10', value: 0.60 },
    { date: '2022-05', value: 0.93 },
    { date: '2022-07', value: 0.35 },
    { date: '2023-10', value: 0.27 },
    { date: '2023-05', value: 0.84 },
    { date: '2024-07', value: 0.85 },
    { date: '2024-10', value: 0.87 },
    { date: '2024-05', value: 0.12 },
    { date: '2020-07', value: 0.86 },
    { date: '2020-10', value: 0.05},
    { date: '2021-05', value: 0.11 },
    { date: '2021-10', value: 0.99 },
    { date: '2022-05', value: 0.24 },
    { date: '2022-07', value: 0.91 },
    { date: '2023-10', value: 0.10 },
    { date: '2023-05', value: 0.26 },
    { date: '2024-07', value: 0.32 },
    { date: '2024-10', value: 0.75 },
    { date: '2024-05', value: 0.92 },
];

export const candleData = data.map(item => ({
    date: item.date,
    open: item.value,
    high: item.value,
    low: item.value,
    close: item.value,
}));
// export const candleData = [
//     { date: '2020-07-01', open: 100, high: 110, low: 95, close: 105 },
//     { date: '2020-07-02', open: 105, high: 115, low: 100, close: 112 },
//     { date: '2020-07-03', open: 112, high: 118, low: 105, close: 115 },
//     { date: '2020-07-06', open: 115, high: 120, low: 110, close: 118 },
//     { date: '2020-07-07', open: 118, high: 122, low: 112, close: 120 },
//     // Ajoutez d'autres entrées selon vos besoins
// ];
