import React from "react";
import "./style.css";
import { useState } from "react";

export default function LandingPage () {
    
    const modoClaro = "modo-claro";
    const modoEscuro = "modo-escuro";

    const botaoClaro = "botao-claro";
    const botaoEscuro = "botao-escuro";

    const textoDark = "Dark";
    const textoLight = "Light";

    const logoClaro = "logo";
    const logoEscuro = "logo-escuro";


const [novoEstilo, setNovoEstilo] = useState(modoClaro);
const [novoBotao, setNovoBotao] = useState(botaoClaro);
const [novoTexto, setNovoTexto] = useState(textoDark);
const [novoLogo, setNovoLogo] = useState(logoClaro);



    const alterarEstilo = () => {

        if (novoEstilo == modoClaro && novoBotao == botaoClaro && novoTexto == textoDark && novoLogo == logoClaro) {
            setNovoEstilo(modoEscuro)
            setNovoBotao(botaoEscuro)
            setNovoTexto(textoLight)
            setNovoLogo(logoEscuro)
            

        } else {
            setNovoEstilo(modoClaro)
            setNovoBotao(botaoClaro)
            setNovoTexto(textoDark)
            setNovoLogo(logoClaro) 
           
        }  
    }

    return (
  
        <main className={novoEstilo}>
        <header className={`limitar-secao topo ${novoEstilo}`}>
        <img className={novoLogo} src={`${process.env.PUBLIC_URL}/Assets/barbearia-logo.png`} alt="Logo" />
        <div >
            <button onClick={alterarEstilo}  className={novoBotao}>{novoTexto}</button>
        </div>
        </header>

        <section className={`banner ${novoEstilo}`}>

        </section>

        <section className={`limitar-secao container ${novoEstilo}`}>
            <h1>Bem-vindo a Barber Shop</h1>
            <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
            <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
            <span className="assinatura">S. Kelly</span>
        </section>
        </main>
    )
}