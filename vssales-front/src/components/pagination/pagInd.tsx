import { SalePage } from "types/sale";
import { PaginationSty } from "./pagSty";

type Props = {
    page: SalePage;
    onPageChange:Function;
}
export default function Pagination({page, onPageChange}:Props){

    return(
        <PaginationSty className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled':''}`}>
                        <button onClick={()=>onPageChange(page.number-1)} className="page-link">Anterior</button>
                    </li>
                    <li className="page-item">
                        <span className="page-link">{page.number+1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled':''}`}>
                        <button onClick={()=>onPageChange(page.number+1)} className="page-link">Próxima</button>
                    </li>
                </ul>
            </nav>
        </PaginationSty>
    )
}