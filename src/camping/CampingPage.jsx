import React, { useState } from 'react'
import { useCamping } from './useCamping'
import css from './CampingPage.module.css'
import DetailModal from './DetailModal'
import Pagination from './Pagination'

const CampingPage = () => {
  const [page, setPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const perPage = 10

  const { data, isLoading, isError } = useCamping(page, perPage)
  const campingData = data?.data
  const totalCount = data?.totalCount

  //   console.log('캠핑 데이터', data)
  //   console.log('캠핑 데이터----', campingData, totalCount, page, perPage)
  const handleCampingClick = list => {
    setIsModalOpen(true)
    setSelected(list)
  }

  isError && <p>에러 발생</p>
  isLoading && <p>Loading...</p>
  return (
    <main>
      <h2>CampingPage</h2>
      <div>
        <p>
          {totalCount}개 중 {perPage}개 표시 / 현재 {page}page
        </p>
        <ul className={css.list}>
          {campingData?.map((list, i) => (
            <li key={list['야영장명'] + i} onClick={() => handleCampingClick(list)}>
              <p>야영장명 : {list['야영장명']}</p>
              <p>주소 : {list['주소']}</p>
              <p>
                연락처 : {list['연락처 앞자리']}-{list['연락처 중간자리']}-
                {list['연락처 끝자리']}{' '}
              </p>
            </li>
          ))}
        </ul>
        <div className={css.paginationContainer}>
          <Pagination page={page} setPage={setPage} totalCount={totalCount} perPage={perPage} />
        </div>
      </div>
      {isModalOpen && <DetailModal selected={selected} setIsModalOpen={setIsModalOpen} />}
    </main>
  )
}

export default CampingPage
