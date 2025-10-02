import BarChart from "components/barChart/bcInd";
import DataTable from "components/dataTable/dtInd";
import DonutChart from "components/donutChart/dcInd";

export function Dash(){
    return(
        <>
            <h1>Sales Dashboard</h1>
                  
            <div className="anal-charts">
                <div className="chart-container">
                    <h5>taxa de conversão</h5>
                    <BarChart/>
                </div>
                <div className="chart-container">
                    <h5>All Sales</h5>
                    <DonutChart/>
                </div>
            </div>
             <div>
                <h2>All Sales</h2>
            </div>
    
            <DataTable/>
            
        </>
    )
}