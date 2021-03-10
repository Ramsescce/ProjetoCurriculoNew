import React from 'react'

const Sidebar = (props) => {
    const { educacao } = props.anwser
    return (
        <>
            {
                educacao.map(item =>
                    <div className="sidebar">
                        <h3>Educação</h3>
                        <div className="lista-de-formacao">
                            <li>
                                <h4>{item.instituicao}</h4>
                                <p>{item.curso}</p>
                            </li>
                            <h3>Atividades Complementares</h3>
                            <h4>{item.instituto}</h4>
                            <p>{item.atribuicoes}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Sidebar