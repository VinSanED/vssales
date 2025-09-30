import { FootSty } from "./footSty";

export default function Foot(){
    return(
        <FootSty className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://github.com/VinSanED" target="_blank" rel="noreferrer">Vinicius Sanches</a></p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br/>
                Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
            </div>
        </FootSty>
    )
}