import React from 'react'

// getting the props from Index
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    // calculating amount of page numbers
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="main__pagination">
            <ul className="pagination justify-content-center">
                {/* for each page number we'll be getting another list item */}

                {/* using bootstrap for appearance */}
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link pagination__btn">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;