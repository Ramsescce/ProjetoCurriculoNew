import React from 'react'
import { useState } from 'react'

const SidebarButton = (props) => {
  const { contatos } = props.anwser
  const [contact, setContact] = useState(false)
  const ChangeButton = () => {
    setContact(true)
  }
  return (
    <>
      <div className="sidebar">
        <h3>Contatos</h3>
        <button onClick={ChangeButton}> Mostrar Contatos </button>
        {
          contatos.map(item => (
            contact && <div className="lista-de-contatos">
              <li>
                <div className="item-contato">
                  <h4>{item.tipo}</h4>
                  <p>{item.contato}</p>
                </div>
              </li>
            </div>
          ))}
      </div>
    </>
  )
}
export default SidebarButton