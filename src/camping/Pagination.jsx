import React from 'react'
import css from './Pagination.module.css'
import { useWindowSize } from '../hooks/useWindowSize'

const Pagination = ({ page, setPage, totalCount, perPage }) => {
  const { width } = useWindowSize()
  const totalPages = Math.ceil(totalCount / perPage) // 전체 페이지 = totalCount 나누기 perPage(10)의 갯수

  // 화면 크기에 따라 보여줄 페이지 수 결정
  const getShowPage = () => {
    if (width < 768) return 3
    if (width < 1024) return 5
    return 10
  }

  const showPage = getShowPage()
  let startPage = Math.max(1, page - Math.floor(showPage / 2))
  let endPage = startPage + showPage - 1

  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(1, endPage - showPage + 1)
  }

  const handleClick = page => {
    if (page < 1 || page > totalPages) return
    setPage(page)
  }

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className={css.main}>
      <ul className={css.list}>
        <li onClick={() => handleClick(1)} className={page === 1 ? css.disabled : ''}>
          처음
        </li>
        <li onClick={() => handleClick(page - 1)} className={page === 1 ? css.disabled : ''}>
          {'<'}
        </li>
        {pages.map(p => (
          <li key={p} className={p === page ? css.activePage : ''} onClick={() => handleClick(p)}>
            {p}
          </li>
        ))}
        <li onClick={() => handleClick(page + 1)} className={page === endPage ? css.disabled : ''}>
          {'>'}
        </li>
        <li
          onClick={() => handleClick(totalPages)}
          className={page === endPage ? css.disabled : ''}
        >
          끝
        </li>
      </ul>
    </div>
  )
}

export default Pagination
