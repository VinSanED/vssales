import { useEffect, useState } from "react";
import { TableSty } from "./dtSty";
import {SalePage } from "types/sale";
import axios from "axios";
import { BASE_URL } from "utils/resquests";
import { formatDate } from "date-fns";

export default function DataTable(){

    const [page, setPage] = useState<SalePage>({
        first:true,
        last:true,
        number:0,
        totalElements:0,
        totalPages:0 
    }); 

    useEffect(()=>{
        axios.get(`${BASE_URL}/sales?page=1&size=20&sort=date,desc`)
            .then(res=>{
                setPage(res.data)
            })
    },[])

    return(

        <TableSty>
            <table >
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        page.content?.map(item=>(
                            <tr key={item.id}>
                                <td>{formatDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </TableSty>
    )
}