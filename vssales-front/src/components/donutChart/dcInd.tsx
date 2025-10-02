import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/resquests';

type ChartData = {
    labels : string[],
    series: number[]
}
export default function DonutChart(){

    const [chartData, setChartData] = useState<ChartData>(
        {
            labels : [],
            series: []
        }
    )
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales/sum`)
            .then(res=>{

                let labels : Array<string> = [];
                let series :Array<number> = [];
                res.data.forEach((d:any)=>{
                    labels.push(d.sellerName);
                    series.push(d.sum);
                })
                setChartData({labels,series});
            })
    },[])
    
    const options = {
        legend: {
            show: true
        }
    }
    return(
        <Chart
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type='donut'
            height={240}
        />
    )
}