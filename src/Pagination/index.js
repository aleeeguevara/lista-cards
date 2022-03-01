import React from "react"
import './index.css';

export const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination-container">
      <span className="pagination" onClick={() => setPage(page-1)}>Voltar</span> | 
      <span> Página atual {page} </span> |
      <span className="pagination" onClick={() => setPage(page+1)}> Avançar</span>
    </div>
  )
}