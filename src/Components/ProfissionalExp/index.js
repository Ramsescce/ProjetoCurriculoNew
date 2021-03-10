import React from 'react'

const ProfissionalExp = (props) => {
  const { certificacoes } = props.anwser
  return (
    <>
      <div className="experience">
        <h2>Certificações e Conhecimentos Técnicos</h2>
        {
          certificacoes.map(item => (
            <div className="experience-item">
              <div>
                <h4>{item.certificado}</h4>
                <span>{item.periodo}</span>
               <strong>{item.ministrado}</strong>
                <span>{item.observacoes}</span>
              </div>
              <p>
                {item.conteudo}
              </p>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default ProfissionalExp