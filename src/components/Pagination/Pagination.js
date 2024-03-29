import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPages(Math.ceil(data.length / dataLimit));
    //eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0' });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    if (pageNumber > pages) {
      return;
    }
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className='pagination-wrapper'>
      {/* show the posts, 5 posts at a time */}
      <div className='dataContainer'>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers
    */}
      <div className='pagination'>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <FaChevronLeft />
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? 'active' : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  RenderComponent: PropTypes.func.isRequired,
  pageLimit: PropTypes.number.isRequired,
  dataLimit: PropTypes.number.isRequired,
};

export default Pagination;
