import React from "react";
import "../styles/pagination.css";

function pagination({ page, setPage }) {
  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="page-btn"
      >
        Prev
      </button>
      <span className="page-number">{page}</span>
      <button
        onClick={() => setPage(page + 1)}
        className="page-btn"
      >
        Next
      </button>
    </div>
  );
}

export default pagination;
