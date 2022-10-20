import React from "react";
import pagination from './styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    const arrPages = []

    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock
    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }
    const handelNext = () => {
        setPage(page + 1)
    }

    const handelPrev = () => {
        setPage(page - 1)
    }

    const handelPage = currentPage => {
        setPage(currentPage)
    }

    return (

        <div className="pagination">
            {
                page > 1 &&
                <div onClick={handelPrev} className="pagination__prev pagination__active">&#60;</div>
            }
            <ul className="pagination__container">
                {
                    arrPages.map(e => (
                        <li onClick={() => handelPage(e)} className={`pagination__page ${page === e && 'pagination__active'}`} key={e}>{e}</li>
                    ))
                }
            </ul>

            {
                page < pagesLength &&
                <div onClick={handelNext} className="pagination__next pagination__active">&#62;</div>
            }
        </div >

    )
}

export default Pagination