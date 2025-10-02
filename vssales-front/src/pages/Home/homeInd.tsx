import { Link } from "react-router-dom";

export function Home(){
    return(
        <main>
            <h1>HOME</h1>
            <section>
                <Link to="/dash">dash</Link>
                <div className="container">
                    <div>
                        <h1 >VSVendas</h1>
                        <p >Analise o desempenho das suas vendas por diferentes perspectivas</p>
        
                        <p>Esta aplicação consiste em
                            exibir um dashboard a partir 
                            de dados fornecidos por um back end 
                            construído com Spring Boot.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}