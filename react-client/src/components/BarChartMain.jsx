import React from 'react';
import BarChart from './BarChart.jsx';

const Chart = ({tracks}) =>  {
    const data = [
        { year: 2012, percent: 100 },
        { year: 2013, percent: 100 },
        { year: 2014, percent: 100 },
        { year: 2015, percent: 100 },
        { year: 2016, percent: 100 },
        { year: 2017, percent: 100 },
        { year: 2018, percent: 150 },
    ];
    return (
        <div style={{ height: '80%' }} >
            <BarChart    data={data} />
        </div>
    );
}

export default Chart;
