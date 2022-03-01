import React from "react"

export const Pagination = ({ page, setPage }) => {
  return (
    <>
      <span onClick={() => setPage(page-1)}>Voltar</span> | 
      <span>Página atual {page} </span> |
      <span onClick={() => setPage(page+1)}>Avançar</span>
    </>
  )
}