import logo from 'assets/logo.svg'
import { NavSty } from './navSty'
import { Link } from 'react-router-dom'
export default function Nav(){
    return(
        <NavSty >
            <div className="container">
                <nav >
                    <Link to="/" className='link'>
                        <img height={60} width={60} src={logo} alt="DevSuperior"  />
                    </Link>
                     <Link to="/dash" className='link'>dash</Link>
                </nav>
            </div>
        </NavSty>
    )
}