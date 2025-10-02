import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/resquests';
import { round } from 'utils/roud';

type SeriesData = {
    name:string,
    data:number[]
}
type ChartData ={
    labels:{
        categories:[]
    },
    series: SeriesData[]
}
export default function BarChart(){

    const [chartData, setChartData]= useState<ChartData>(
        {
            labels:{
               categories:[]
            },
            series:[{
                name:"",
                data:[]
            }]
        }
    )
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales/success`).then(
            res=>{
                let labels :any = {categories:[]};
                let series : Array<SeriesData>= [{name:"% success",data:[]}];
                res.data.forEach((d:any)=>{
                    labels.categories.push(d.sellerName);
                    series[0].data.push(round(100.0 * d.deals / d.visited, 1));
                })
                setChartData({labels:labels, series:series});
            }
        )
    },[])
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };


    return(
        <Chart 
            options={{...options, xaxis: chartData.labels}}
            series={chartData.series}
            type='bar'
            height={240}
        />
    )
}