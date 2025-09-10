import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/bookCard";
import Pagination from "./components/pagination";
import "./App.css";

function App() {
  const [query, setQuery] = useState("harry potter");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?title=${query}&page=${page}`
        );
        const data = await res.json();
        setBooks(data.docs);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    fetchBooks();
  }, [query, page]);

  return (
    <div className="app">
      <h1 className="app-title">📚 Book Finder</h1>
      <SearchBar setQuery={setQuery} />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : books.length === 0 ? (
        <p className="no-results">No results found.</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default App;
