import React from 'react';

export default class Books extends React.Component {
  render() {
    const { books } = this.props.books || [];
    return (
      <>
        <ul className="book-container">
          {books.map((book) => {
            return (
              <div className="book-content">
                <li className="no-style">
                  <img className="book-img" src={book.image} alt="" />
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <button className="book-btn"> Buy Now </button>
                </li>
              </div>
            )
          })}
        </ul>
      </>
    )
  }
}