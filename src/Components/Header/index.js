import React from 'react'
import foto from '../../Imagem/foto.jpg'
const Header = (props) => {
  const { nome, ocupacao, resumo,perfilProfissional } = props.anwser
  return (
    <>
      <div className="perfil">
       <img src={foto} alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          {nome}
        </h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>Iniciando minha trajetória no desenvolvimento de projetos React</p>
      </div>
      <div className="titulo">
        Perfil <br /> {perfilProfissional}
      </div>
      <div className="perfil-profissional">
        <p>
          {resumo}
        </p>
      </div>
    </>
  )
}
export default Header    