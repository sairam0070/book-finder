import React from "react";
import "../styles/bookCard.css";

function bookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} className="book-cover" />
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">
        {book.author_name?.join(", ") || "Unknown Author"}
      </p>
      <p className="book-year">{book.first_publish_year || "N/A"}</p>
    </div>
  );
}

export default bookCard;
