import { useState } from 'react';
import './App.css';

import { Card } from './Card'
import { Pagination } from './Pagination'

function App() {
  const [page, setPage] = useState(1)
  const itensPerPage = 3;

  const cards = [
    <Card number={1} />,
    <Card number={2} />,
    <Card number={3} />,
    <Card number={4} />,
    <Card number={5} />,
    <Card number={6} />,
    <Card number={7} />,
    <Card number={8} />,
    <Card number={9} />,
    <Card number={10} />
  ]

  return (
    <div className="App">
      {cards.map((card, index) => {
        if (index < itensPerPage) {
          return card
        }
      })}
      
      <div>
        <span onClick={() => setPage(page-1)}>Voltar</span> | 
        <span>Página atual {page} </span> |
        <span onClick={() => setPage(page+1)}>Avançar</span>
      </div>
    </div>
  );
}

export default App;
