import React from "react";
import "./App.css"
import Header from "./Components/Header";
import { useState } from 'react'
import SidebarButton from './Components/SidebarButton';
import Sidebar from "./Components/Sidebar";
import ProfissionalExp from "./Components/ProfissionalExp";

const App = () => {


  const fakeAPI =
  {
    nome: 'Ramses Godoy',
    ocupacao: 'Desenvolvedor Front End ReactJS',
    resumo: '"Ser um parceiro de pensamento contnuo em iniciativas estratégicas de planejamento e desenvolvimento"',
    perfilProfissional: 'Profissional',
    contatos: [
      {
        id: 1,
        tipo: 'telefone',
        contato: '48 998234159'
      },
      {
        id: 2,
        tipo: 'email',
        contato: 'ramses.godoy@fatec.sp.gov.br'
      },
      {
        id: 3,
        tipo: 'GitHub',
        contato: 'https://github.com/Ramsescce'
      },
      {
        id: 3,
        tipo: 'Linkedin',
        contato: 'www.linkedin.com/in/ramses-godoy-3b879174/'
      }
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'FATEC CAMPINAS',
        curso: 'Análise e Desenvolvimento de Sistemas 2020-2023',
        instituto:'Instituto Compassos',
        atribuicoes:'Atuava junto à alunos adultos afásicos e Down dando suporte e ajuda nas rotinas diárias dentro da instituição 06/2019-06/2020 https://www.instagram.com/instituto_compassos.'
      }
    ],
    certificacoes: [
      {
        id: 1,
        certificado: 'Programador de Sistemas',
        periodo: 'Jul/2020 – Nov/2020',
        ministrado: 'Ministrado pela IFRO',
        observacoes: '',
        conteudo: 'Conhecimento em Algoritmos, Linguagem C, Javascript.'
      },
      {
        id: 2,
        certificado: 'Trilha ReactJS Campinas Tech Talents',
        periodo: 'Jan/2021 - Mar/2020',
        ministrado: 'Share RH',
        observacoes: 'Imersão',
        conteudo: 'Conhecimento em React, Typescript, JSX, Redux, Redux Saga, Postman ,Git.'
      }
    ]
  }
  const [anwser] = useState(fakeAPI)
  return (
    <main>
      <Header anwser={anwser} />
      <aside>
        <SidebarButton anwser={anwser} />
        <Sidebar anwser={anwser} />
      </aside>
      <ProfissionalExp anwser={anwser} />
    </main>
  );
}

export default App;