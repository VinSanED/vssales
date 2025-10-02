import Foot from "components/footer/footInd";
import Nav from "components/navbar/navInd";
import { Dash } from "pages/Dashboard/dashInd";
import { Home } from "pages/Home/homeInd";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function RoutesProvider(){
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dash" element={<Dash/>}/>
            </Routes>
            <Foot/>
        </BrowserRouter>
    )
}