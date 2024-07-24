import { useContext } from 'react'
import { CharactersContext } from '../context/CharactersContext'

export const GeneralInfo = () => {
  const {
    totalResults,
    totalPages,
    actualPage,
    nextPage,
    prevPage,
    goToNext,
    goToPrev,
    goToPage,
  } = useContext(CharactersContext)

  const pageOptions = []

  for (let i = 1; i <= totalPages; i++) {
    pageOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }

  return (
    <>
      <div className='col-3 d-flex align-items-center'>
        <b>Total results:</b>
        {totalResults}
      </div>

      <div className='col-3 d-flex align-items-center'>
        <b>Page:</b> {actualPage} of {totalPages}
      </div>

      <div className='col-3 d-flex align-items-center'>
        <b>Go to Page</b>
        <select
          name='goTo'
          className='form-select w-auto m'
          value={actualPage}
          onChange={(e) => goToPage(parseInt(e.target.value))}
        >
          {pageOptions}
        </select>
      </div>

      <div className='col-3 text-end'>
        {prevPage && (
          <button className='btn btn-success mx-2' onClick={goToPrev}>
            Prev
          </button>
        )}
        {nextPage && (
          <button className='btn btn-success' onClick={goToNext}>
            Next
          </button>
        )}
      </div>
    </>
  )
}
