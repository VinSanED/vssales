import logo from 'assets/logo.svg'
import { NavSty } from './navSty'
export default function Nav(){
    return(
        <NavSty >
            <div className="container">
                <nav >
                    <img height={60} src={logo} alt="DevSuperior" width="120" />
                </nav>
            </div>
        </NavSty>
    )
}