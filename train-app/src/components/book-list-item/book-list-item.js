import React, { Fragment } from 'react';
import './book-list-item.css';

const BookListItem = ({book}) => {
  const { name,author } = book;
  return (
    <Fragment>
      <span>{name}</span>
      <span>{author}</span>
    </Fragment>
  )
}
export default BookListItem;
